const router = require('express').Router();
//this is exerciseLog Schema
let ExerciseLog = require('../models/exercise.model');


// This handles the POST request to http://localhost:5001/api/exercise-logs/add
router.route('/add').post((req, res) => {
    console.log(req.body);
    // Get the data from the form (the waiter brings this from the frontend)
    const { exerciseName, muscleGroup, sets, reps, weight,date } = req.body;

    // Create a new log using the schema
    const newExerciseLog = new ExerciseLog({
        exerciseName,
        muscleGroup,
        sets,
        reps,
        weight,
        date

    });

    // Save it to the database
    newExerciseLog.save()
        .then(() => res.json('Exercise log added!')) // Send a success message back
        .catch(err => res.status(400).json('Error: ' + err)); // Or an error
});

// This handles the POST request to http://localhost:5001/api/exercise-logs/get
router.route('/get').post((req, res) => {
    ExerciseLog.find() // Find all exercise logs in the database
        .then(exerciseLogs => res.json(exerciseLogs))
        .catch(err => res.status(400).json('Error: ' + err)); // Or send an error
});


module.exports = router;
