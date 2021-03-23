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
        <a
          className="h-full"
          href="https://leetcode.com/3LexW/"
          aria-label="See my LeetCode profile"
        >
          <img
            className="h-full m-1"
            src={leetcodeLogo}
            alt="LeetCode Logo"
          ></img>
        </a>
        <a
          className="h-full"
          href="https://github.com/3LexW"
          aria-label="See my GitHub profile"
        >
          <img className="h-full m-1" src={githubLogo} alt="GitHub Logo"></img>
        </a>
        <a
          className="h-full"
          href="mailto: pakywong9@gmail.com"
          aria-label="Send me an email"
        >
          <img className="h-full m-1" src={emailLogo} alt="Email Icon"></img>
        </a>
        <a
          className="h-full"
          href="https://www.linkedin.com/in/pakywong/"
          aria-label="See my LinkedIn profile"
        >
          <img
            className="h-full m-1 "
            src={linkedinLogo}
            alt="LinkedIn Logo"
          ></img>
        </a>
      </div>
    </div>
  );
};

export default Contact;
