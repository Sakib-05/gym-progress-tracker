import React, { useEffect, useState } from "react";
import axios from "axios";

const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);

  // load exercises from mongoDB
  useEffect(() => {
    async function fetchExercises() {
      try {
        // Should be GET, but your backend uses POST. You may want to fix it.
        const res = await axios.get(
          "http://localhost:5001/api/exercise-logs/get"
        );
        setExercises(res.data);
        console.log(res.data);
      } catch (err) {
        console.error("Failed to fetch exercises", err);
      }
    }
    fetchExercises();
  }, []);

  async function deleteExercise(id) {
    try {
      const res = await axios.delete(
        `http://localhost:5001/api/exercise-logs/delete/${id}`
      );
      console.log(res.data);
      setExercises(exercises.filter((exercise) => exercise._id !== id));
    } catch (err) {
      console.error("Failed to delete exercise", err);
    }
  }

// start of the update exercise feature

  return (
    <div
      className="ExerciseList"
      style={{ border: "1px solid black", width: "100%", marginInline: "20px" }}
    >
      <h1>hello there this is the Exercise List area</h1>
      <div>
        <h2>Logged Exercises</h2>
        <div>
          {exercises &&
            exercises.map((exercise, index) => (
              <div
                key={exercise._id}
                style={{
                  border: "1px solid gray",
                  padding: "10px",
                  margin: "20px",
                }}
              >
                <h3 key={exercise._id}>{exercise.exerciseName}</h3>
                <p>Muscle Group: {exercise.muscleGroup}</p>
                <p>Sets: {exercise.sets}</p>
                <p>Reps: {exercise.reps}</p>
                <p>Weight: {exercise.weight} Kg</p>
                <p>Date: {new Date(exercise.date).toLocaleDateString()}</p>
                <hr />
                <button onClick={() => deleteExercise(exercise._id)}>
                  Delete
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ExerciseList;
