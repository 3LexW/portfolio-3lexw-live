import React, { Component } from "react";
import Project from "./Project.js";

const MyProject = () => {
  return (
    <div>
      <div className="px-16 bg-gray-800 lg:flex items-center justify-center text-center">
        <h1 className="font-major text-white text-5xl py-12">My Projects</h1>
      </div>
      <div className="w-full">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
};

export default MyProject;
