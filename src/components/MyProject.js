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
    fetch("https://api-3lexw.herokuapp.com/projects/")
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
        <div className="px-16 bg-gray-800 lg:flex items-center justify-center text-center">
          <h1 className="font-major text-white text-5xl py-12">My Projects</h1>
        </div>
        <div className="w-full flex flex-col-reverse">
          {this.state.projectList.map((project) => Project(project))}
        </div>
      </div>
    );
  }
}

export default MyProject;
