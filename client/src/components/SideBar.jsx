import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div
      className="SideBar"
      style={{ border: "1px solid black", padding: "40px" }}
    >
      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          color: "black",
        }}
      >
        <Link style={{ color: "black" }} to="/ExerciseForm">
          Exercise Form
        </Link>
        <Link to="/ExerciseList">Exercise List</Link>
        <Link to="/">Description</Link>
      </nav>
    </div>
  );
};

export default SideBar;
