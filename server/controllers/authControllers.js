import jwt from "jsonwebtoken";
import User from "../models/userSchema.js";
import zod from "zod";
import bcrypt from "bcrypt";

const signupBody = zod.object({
  username: zod.string().email(),
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string(),
});

const signinBody = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});

const updateBody = zod.object({
  password: zod.string().optional(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
});

export const signup = async (req, res) => {
  const { success } = signupBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Email already taken / Incorrect inputs",
    });
  }

  const existingUser = await User.findOne({
    username: req.body.username,
  });

  if (existingUser) {
    return res.status(411).json({
      message: "Email already taken/Incorrect inputs",
    });
  }
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const user = await User.create({
    username: req.body.username,
    password: hashedPassword,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });

  const userId = user._id;
  const token = jwt.sign(
    {
      userId,
    },
    process.env.JWT_SECRET
  );

  res.json({
    message: "User created",
    token: token,
  });
};

export const signin = async (req, res) => {
  const { success } = signinBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }

  const user = await User.findOne({
    username: req.body.username,
  });

  if (user) {
    const passwordMatch = await bcrypt.compare(req.body.password, user.password);

    if (passwordMatch) {
      const token = jwt.sign(
        {
          userId: user._id,
        },
        process.env.JWT_SECRET
      );

      res.json({
        token: token,
      });
      return;
    }
  }

  res.status(411).json({
    message: "Error while logging in",
  });
};


export const update = async (req, res) => {
  const { success } = updateBody.safeParse(req.body);
  if (!success) {
    res.status(411).json({
      message: "Error while updating information",
    });
  }

  await User.updateOne({ _id: req.userId }, req.body);
  res.json({
    message: "Updated successfully",
  });
};

export const bulk = async (req, res) => {
  const filter = req.query.filter || "";

  const users = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
        },
      },
      {
        lastName: {
          $regex: filter,
        },
      },
    ],
  });

  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
};
