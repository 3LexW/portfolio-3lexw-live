import React, { Component } from "react";
import DivBar from "./DivBar.js";
const imageURL = "https://picsum.photos/1920/1080";

const Project = (props) => {
  return (
    <div
      className="h-96 w-full text-white"
      style={{ backgroundImage: `url(${imageURL})` }}
    >
      <div className="z-10 bg-black bg-opacity-70 w-full h-full flex items-center justify-items-center l text-center">
        <div className="w-full">
          <h1 className="mx-4 text-xl font-mono text-yellow-300 font-bold">
            Feb-2021
          </h1>
          <h1 className="mx-4 font-major text-3xl tracking-wider">
            The Portfolio of Felix Wong
          </h1>
          <DivBar />
          <p className="lg:px-12 px-6 font-sans">
            This is my first attempt of full Stack development to create a
            platform to demonstrate my personal work.
          </p>
          <h3 className="italic mx-4 my-2 font-mono text-sm text-gray-400">
            Django - ReactJS - TailWind CSS
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Project;
