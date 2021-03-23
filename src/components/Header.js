import React from "react";
import backgroundImage from "../static/images/background.jpg";
import icon from "../static/images/icon.svg";
import DivBar from "./DivBar.js";

const Header = () => {
  return (
    <div
      className="h-screen flex items-center justify-items-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="header text-center w-full">
        <img
          className="h-32 mx-auto"
          src={icon}
          alt="3LexW Website's Logo"
        ></img>
        <DivBar />
        <h1 className="uppercase font-major text-5xl text-gray-50">
          Felix Wong
        </h1>
        <DivBar />
        <h1 className="italic font-major text-2xl text-yellow-300">
          Software Engineer. Life-time Learner.
        </h1>
      </div>
    </div>
  );
};

export default Header;
