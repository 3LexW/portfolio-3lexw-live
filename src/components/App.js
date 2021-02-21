import React from "react";
import "./App.css";
import Header from "./Header.js";
import Navbar from "./Navbar.js";
import About from "./About.js";
import MyProject from "./MyProject.js";
import Contact from "./Contact.js";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <MyProject />
      <Contact />
    </div>
  );
}

export default App;
