// client/src/components/ExerciseList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ExerciseList = () => {
    const [exercises, setExercises] = useState();

    // load exercises from mongoDB 
    useEffect(() => {
        axios.post('http://localhost:5001/api/exercise-logs/get').then(res => {
            setExercises(res.data);
        }).catch(err => console.log('Error: ' + err));     
    }, []);

    return (
        <div className="ExerciseList" style={{border:'1px solid black'}}>
            <h1>hello there this is the Exercise List area</h1>
            <div>
                <h2>Logged Exercises</h2>
                <div>
                    {exercises && exercises.map((exercise, index) => (
                        <div key={index} style={{border:'1px solid gray', padding:'10px'}}>
                            <h3 key={index}>{exercise.exerciseName}</h3>
                            <p>Muscle Group: {exercise.muscleGroup}</p>
                            <p>Sets: {exercise.sets}</p>
                            <p>Reps: {exercise.reps}</p>
                            <p>Weight: {exercise.weight} Kg</p>
                            <p>Date: {new Date(exercise.date).toLocaleDateString()}</p>
                            <hr/>
                        </div>
                    
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExerciseList;