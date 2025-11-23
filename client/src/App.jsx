import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import ExerciseForm from "./components/ExerciseForm.jsx";
import SideBar from "./components/SideBar.jsx";
import ExerciseList from "./components/ExerciseList.jsx";
import Description from "./components/Description.jsx";

function App() {
  return (
    <div className="App">
      <h1
        style={{
          border: "1px solid black",
          margin: "0px",
          color: "blue",
          background: "lightgoldenrodyellow",
        }}
      >
        Gym Progress Tracker
      </h1>
      <Router>
        <div style={{ display: "flex",height:"100%", width:"100%"}}>
          <SideBar></SideBar>
          <Routes>
            <Route path="/ExerciseForm" element={<ExerciseForm />} />
            <Route path="/ExerciseList" element={<ExerciseList />} />
            <Route path="/" element={<Description />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
