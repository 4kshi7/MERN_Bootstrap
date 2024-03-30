import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();



  return (
    <div
      className="bg-gray-500 h-screen w-screen flex justify-center items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url('https://img.freepik.com/free-photo/top-view-kraft-spiral-notebooks-with-pen-dark-background_140725-141658.jpg')`,
        backgroundPosition: "center 7%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container bg-[#000] text-white h-[50vh] w-[40vh] rounded-3xl flex flex-col justify-center items-center gap-5">
        <h1 className="text-3xl text-center">Login</h1>
        <div className="h-[60%] w-[80%] flex flex-col items-center justify-center gap-8">
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-[80%] py-2 px-3 bg-slate-700 rounded-lg"
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-[80%] py-2 px-3 bg-slate-700 rounded-lg"
          />
          <button
            className="w-[80%] py-2 px-3 bg-blue-600 text-white rounded-xl"
            onClick={async () => {
                const response = await axios.post(
                  "http://localhost:5454/api/v1/signin",
                  {
                      username,
                      password
                  });
                  localStorage.setItem("token", response.data.token);
                  navigate("/dashboard")
              }}
          >
            Submit
          </button>
        </div>
        <Link to="/signup">Don't have an account? Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
