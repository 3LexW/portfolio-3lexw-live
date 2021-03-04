import React, { Component } from "react";
import DivBar from "./DivBar.js";

const Project = (props) => {
  const imageURL = "https://picsum.photos/id/" + props.image_id + "/1920/1080";
  return (
    <div
      className="h-96 w-full text-white"
      style={{ backgroundImage: `url(${imageURL})` }}
    >
      <div className="z-10 bg-black bg-opacity-70 w-full h-full flex items-center justify-items-center l text-center">
        <div className="w-full">
          <h1 className="mx-4 text-xl font-mono text-yellow-300 font-bold">
            {props.date}
          </h1>
          <a href={props.project_url}>
            <h1 className="mx-4 font-major text-3xl tracking-wide hover:text-yellow-500 transition">
              {props.name}
            </h1>
          </a>

          <DivBar />

          <p
            className="lg:px-12 px-6 font-sans"
            dangerouslySetInnerHTML={createDescription(props.description)}
          ></p>
          <h3 className="italic mx-4 my-2 font-mono text-sm text-gray-400">
            {props.tags.sort().join(" - ")}
          </h3>
        </div>
      </div>
    </div>
  );
};

function createDescription(description) {
  return { __html: description };
}

export default Project;
