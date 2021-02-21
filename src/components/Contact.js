import React from "react";
import DivBar from "./DivBar.js";
import githubLogo from "../static/images/logos/github.svg";
import linkedinLogo from "../static/images/logos/linkedin.svg";
import emailLogo from "../static/images/logos/email.svg";
import leetcodeLogo from "../static/images/logos/leetcode.svg";

const Contact = () => {
  return (
    <div className="bg-yellow-300 items-center justify-center text-center py-12">
      <h1 className="font-major text-5xl">Contact</h1>
      <DivBar />
      <div className="h-24 py-4 flex items-center justify-center">
        <a className="h-full" href="https://leetcode.com/3LexW/">
          <img className="h-full m-1" src={leetcodeLogo}></img>
        </a>
        <a className="h-full" href="https://github.com/3LexW">
          <img className="h-full m-1" src={githubLogo}></img>
        </a>
        <a className="h-full" href="mailto: pakywong9@gmail.com">
          <img className="h-full m-1" src={emailLogo}></img>
        </a>
        <a className="h-full" href="https://www.linkedin.com/in/pakywong/">
          <img className="h-full m-1 " src={linkedinLogo}></img>
        </a>
      </div>
    </div>
  );
};

export default Contact;
