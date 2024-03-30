import React from "react";
import Navbar from "./partials/Navbar";

const Home = () => {
  return (
    <div
      className="h-screen w-screen"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url('https://i.pinimg.com/originals/6b/b5/87/6bb58739f4972f834a5396f2818f8829.gif')`,
        backgroundPosition: "center 7%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar/>
    </div>
  );
};

export default Home;
