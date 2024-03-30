import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Buttons from "./partials/Buttons";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div
      className="bg-gray-500 h-screen "
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url('https://i.pinimg.com/originals/aa/ea/de/aaeadebad5e09b3ccd29b45fd36134a6.gif')`,
        backgroundPosition: "center 7%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Buttons label={"Logout"} onClick={handleLogout} />
    </div>
  );
};

export default Dashboard;
