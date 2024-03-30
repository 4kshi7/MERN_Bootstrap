import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div
      className="bg-gray-500 h-screen w-screen flex justify-center items-center"
      style={{
        backgroundImage: `linear-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)), url('https://i.pinimg.com/originals/22/a0/ff/22a0ff47046338c1f015610bccdb3b8c.gif')`,
        backgroundPosition: "center 7%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container  backdrop-blur-xl bg-white/10 text-white h-[60vh] w-[45vh] rounded-3xl flex flex-col justify-between py-6 items-center gap-3">
        <h1 className="text-3xl text-center">Signup</h1>
        <div className=" w-[100%] flex flex-col items-center justify-center gap-5">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-[80%] py-2 px-3 backdrop-blur-xl bg-white/10 rounded-lg"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-[80%] py-2 px-3 backdrop-blur-xl bg-white/10 rounded-lg"
          />
          <input
            type="text"
            placeholder="Email Address"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-[80%] py-2 px-3 backdrop-blur-xl bg-white/10 rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-[80%] py-2 px-3 backdrop-blur-xl bg-white/10 rounded-lg"
          />

          <button
            className="w-[80%] py-2 px-3 mt-3 backdrop-blur-xl bg-blue-600/20 text-white rounded-xl"
            onClick={async () => {
              const response = await axios.post(
                "http://localhost:5454/api/v1/signup",
                {
                    username,
                    firstName,
                    lastName,
                    password
                });
                localStorage.setItem("token", response.data.token);
                navigate("/dashboard")
            }}
          >
            Sign Up
          </button>
        </div>
        <Link to="/login">Already have an account? Login</Link>
      </div>
    </div>
  );
};

export default Signup;
