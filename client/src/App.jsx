import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import ExerciseForm from "./components/ExerciseForm.jsx";
import SideBar from "./components/SideBar.jsx";
import ExerciseList from "./components/ExerciseList.jsx";
import Description from "./components/Description.jsx";

function App() {
    const [exercises, setExercises] = useState([
        {exerciseName:"bench press", sets:3, reps:10, weight:60, date:"2023-10-01"},
        {exerciseName:"squat", sets:4, reps:8, weight:80, date:"2023-10-02"},
    ]);

    return (
      <div className="App">
          <h1 style={{border:'1px solid black', margin:'0px', color:"blue", background:"lightgoldenrodyellow"}}>Gym Progress Tracker</h1>
          <Router>
              <div style={{display: 'flex', gap: '50px'}}>
                  <SideBar></SideBar>
                  <Routes>
                      <Route path="/ExerciseForm" element={<ExerciseForm exercises={exercises} setExercises={setExercises}/>} />
                      <Route path="/ExerciseList" element={<ExerciseList exercises={exercises} />} />
                      <Route path="/description" element={<Description />} />
                  </Routes>

              </div>


          </Router>
      </div>
  )
}

export default App


