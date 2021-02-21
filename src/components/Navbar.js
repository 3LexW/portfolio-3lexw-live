import React, { Component } from "react";
import cvURL from "../static/CV_Pak Yun Wong.pdf";

const NavBar = () => {
  return (
    <div
      className="fixed w-full p-3"
      style={{
        background:
          "linear-gradient(90deg, rgba(255,142,0,0.20) 0%, rgba(255,229,0,0.20) 100%)",
      }}
    >
      <ul className="flex justify-around font-major text-2xl text-white tracking-wide">
        <li>
          <a
            className="hover:text-yellow-500 transaction duration-100"
            href="https://github.com/3lexw"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            className="hover:text-yellow-500 transaction duration-100"
            href="https://www.linkedin.com/in/pakywong/"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a
            className="hover:text-yellow-500 transaction duration-100"
            href={cvURL}
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
