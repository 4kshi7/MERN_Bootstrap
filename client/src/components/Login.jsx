import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5454/api/v1/signin",
        {
          username,
          password
        }
      );
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      toast.error("Invalid username or password");
    }
  };

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
      <div className="container backdrop-blur-xl bg-white/10 text-white h-[50vh] w-[40vh] rounded-3xl flex flex-col justify-center items-center gap-3">
        <h1 className="text-3xl text-center">Login</h1>
        <div className="h-[60%] w-[80%] flex flex-col items-center justify-center gap-8">
          <input
            type="text"
            placeholder="tylerdurden@gmail.com"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-[95%] py-2 px-3 backdrop-blur-xl bg-white/10 rounded-lg focus:outline-none"
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-[95%] py-2 px-3 backdrop-blur-xl bg-white/10 rounded-lg focus:outline-none"
          />
          <button
            className="w-[90%] py-2 px-3 backdrop-blur-xl bg-blue-600/20 text-white rounded-xl hover:scale-105 hover:bg-blue-900/50 duration-75"
            onClick={handleLogin}
          >
            Submit
          </button>
        </div>
        <Link to="/signup">Don't have an account? Sign Up</Link>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
