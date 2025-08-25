// client/src/components/ExerciseList.jsx
import React from 'react';

const ExerciseList = ({ exercises }) => {
    return (
        <div className="ExerciseList" style={{border:'1px solid black'}}>
            <h1>hello there this is the Exercise List area</h1>
            <div>
                {exercises.map((exercise, index) => (
                    <div key={index} style={{border:'1px solid gray', padding:'10px'}}>
                        <h3>{exercise.exerciseName}</h3>
                        <p>Sets: {exercise.sets}</p>
                        <p>Reps: {exercise.reps}</p>
                        <p>Weight: {exercise.weight} Kg</p>
                        <p>Date: {exercise.date}</p>
                        <hr/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExerciseList;