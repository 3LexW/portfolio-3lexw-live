import React from "react";
import DivBar from "./DivBar.js";
import reactLogo from "../static/images/logos/react.svg";
import tailwindcssLogo from "../static/images/logos/tailwindcss.svg";
import bootstrapLogo from "../static/images/logos/bootstrap.svg";
import djangoLogo from "../static/images/logos/django.svg";
import rLogo from "../static/images/logos/r.svg";
import pythonLogo from "../static/images/logos/python.svg";
import javaLogo from "../static/images/logos/java.svg";
import cppLogo from "../static/images/logos/cpp.svg";
import githubLogo from "../static/images/logos/github.svg";
import htmlLogo from "../static/images/logos/html.svg";
import cssLogo from "../static/images/logos/css.svg";
import javascriptLogo from "../static/images/logos/javascript.svg";
import mysqlLogo from "../static/images/logos/mysql.svg";
import netlifyLogo from "../static/images/logos/netlify.svg";
import postgresqlLogo from "../static/images/logos/postgresql.png";
import herokuLogo from "../static/images/logos/heroku.svg";

const About = () => {
  return (
    <div className="bg-yellow-300 text-center 2xl:px-72 lg:px-32 px-6 py-12">
      <h1 className="font-major text-5xl">About Me</h1>
      <DivBar />
      <p className="font-major text-2xl">
        Hi, I am a year 4 student from City University of Hong Kong, major in
        Computational Finance. I began to switch my focus on learning computer
        science and software development since Mid-2020.
      </p>
      <br></br>
      <p className="font-major text-2xl">
        I am currently working as a part-time VBA developer and a web
        application developer. I am currently practicing my skills in trending
        technology stack, building side projects, and looking for internships in
        software development and engineering.
      </p>
      <br></br>
      <div className="font-major text-2xl">
        <p>My current development stack is</p>
        <div className="2xl:px-96 lg:px-32 px-6 my-12 h-72 grid grid-rows-6 grid-cols-3 gap-4 items-center text-right justify-center">
          <div>Frontend</div>
          <div className="h-full col-span-2 flex justify-start">
            <img className="h-full mx-1" src={reactLogo}></img>
            <img className="h-full mx-1" src={htmlLogo}></img>
            <img className="h-full mx-1" src={cssLogo}></img>
            <img className="h-full mx-1" src={javascriptLogo}></img>
          </div>
          <div>CSS</div>
          <div className="h-full col-span-2  flex justify-start">
            <img className="h-full mx-1" src={tailwindcssLogo}></img>
            <img className="h-full mx-1" src={bootstrapLogo}></img>
          </div>
          <div>Backend</div>
          <div className="h-full col-span-2  flex justify-start">
            <img className="h-full mx-1" src={djangoLogo}></img>
            <img className="h-full mx-1" src={mysqlLogo}></img>
            <img className="h-full mx-1" src={postgresqlLogo}></img>
          </div>
          <div>Scripting</div>
          <div className="h-full col-span-2  flex justify-start">
            <img className="h-full mx-1" src={pythonLogo}></img>
            <h1 className="mx-1">Excel VBA</h1>
          </div>
          <div>Deploy</div>
          <div className="h-full col-span-2  flex justify-start">
            <img className="h-full mx-1" src={githubLogo}></img>
            <img className="h-full mx-1" src={netlifyLogo}></img>
            <img className="h-full mx-1" src={herokuLogo}></img>
          </div>
          <div>Minor</div>
          <div className="h-full col-span-2  flex justify-start">
            <img className="h-full mx-1" src={javaLogo}></img>
            <img className="h-full mx-1" src={rLogo}></img>
            <img className="h-full mx-1" src={cppLogo}></img>
          </div>
        </div>
        <p>
          Besides the previous listed technology stack, I am open to new
          technology for development
        </p>
      </div>
    </div>
  );
};

export default About;
