// This is the page where portfolio will be displayed.
import React, { Component } from "react";
import Category from "../Components/Category";
import Display from "../Components/Display";
import projects from "../projects.json"; 

class Work extends Component {
    // Setting this.state.projects to the projects json array
    state = {
      category: "Web"
    };
//handleCategoryChange function

  handleCategoryChange = currentCategory => {
    this.setState({ category: currentCategory });
  };



render() {
    return (

// Category component

<Category></Category>

// Display Component

<Display></Display>

    )
}

}
export default Work;