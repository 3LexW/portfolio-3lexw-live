import React, { Component } from "react";
import Project from "./Project.js";

class MyProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectList: [],
    };
  }

  componentDidMount() {
    fetch("https://api.3lexw.com/projects/")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          projectList: result,
        });
      });
  }

  render() {
    return (
      <div>
        <div className="px-4 lg:px-16 bg-gray-800 items-center justify-center text-center">
          <h1 className="font-major text-white text-5xl pt-12 pb-2 block">
            My Projects
          </h1>
          <p className="font-major text-white text-2xl block pt-2 pb-12">
            (Require some loading time to activate my API Site{" "}
            <a href="https://api.3lexw.com">api.3lexw.com</a>)
          </p>
        </div>

        <div className="w-full flex flex-col-reverse">
          {this.state.projectList.map((project) => Project(project))}
        </div>
      </div>
    );
  }
}

export default MyProject;
