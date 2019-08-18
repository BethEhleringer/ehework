//This component has two or more buttons where the user can select the project category.

import React from "react";

function Category(props) {
  return (
    
    <div>
        <button
          onClick={() => props.handleCategoryChange("Web")}
          className={props.currentCategory === "Web" ? "nav-link active" : "nav-link"}
        >
          Web
        </button>
        <button
          onClick={() => props.handleCategoryChange("Print")}
          className={props.currentCategory === "Print" ? "nav-link active" : "nav-link"}
        >
          Print
        </button>
     </div>
  );
}

export default Category;
