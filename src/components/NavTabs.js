// This component is the top level navbar for the pages.

import React from "react";

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => props.handlePageChange("Home")}
          className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => props.handlePageChange("About")}
          className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </li>
     
      <li className="nav-item">
        <a
          href="#work"
          onClick={() => props.handlePageChange("Work")}
          className={props.currentPage === "Work" ? "nav-link active" : "nav-link"}
        >
          Work
        </a>
      </li>
      
    </ul>
  );
}

export default NavTabs;
