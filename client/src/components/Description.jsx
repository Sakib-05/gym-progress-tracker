import React from 'react';
import exerciseForm from "./ExerciseForm.jsx";

const Description = () => {
    return (
        <div className="Description" style={{border:'1px solid black'}}>
            <h2>Description</h2>
            <p>Welcome to the Gym Progress Tracker! This application is designed to help you monitor and track your workout routines and progress over time. Whether you're a beginner or an experienced fitness enthusiast, this tool will assist you in staying organized and motivated.</p>
            <h3>Features:</h3>
            <ul>
                <li><strong>Exercise Form:</strong> Easily log your workouts by filling out the exercise form. You can input details such as exercise name, sets, reps, weight, and date.</li>
                <li><strong>Exercise List:</strong> View a comprehensive list of all your logged exercises. You can sort and filter the list to find specific workouts or track your progress on particular exercises.</li>
                <li><strong>Progress Tracking:</strong> Monitor your improvements over time with visual charts and statistics that showcase your strength gains and endurance levels.</li>
                <li><strong>User-Friendly Interface:</strong> The application features a clean and intuitive design, making it easy to navigate and use.</li>
            </ul>
            <h3>Getting Started:</h3>
            <ol>
                <li>Navigate to the "Exercise Form" section to start logging your workouts.</li>
                <li>Fill in the required fields and submit the form to save your exercise data.</li>
                <li>Visit the "Exercise List" section to view and manage your logged exercises.</li>
                <li>Regularly update your workouts to keep track of your progress and stay motivated!</li>
            </ol>
            <p>We hope you find the Gym Progress Tracker helpful in achieving your fitness goals. Happy training!</p>
        </div>
    );
};

export default Description;
