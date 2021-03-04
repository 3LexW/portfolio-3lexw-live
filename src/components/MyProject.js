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
    var url = "https://api-3lexw.herokuapp.com/projects/";

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        this.setState({
          projectList: xhr.responseText,
        });
      }
    };

    fetch("https://api-3lexw.herokuapp.com/projects/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          projectList: data.results,
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
