const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const exerciseLogSchema = new Schema({
    exerciseName: { type: String, required: true },
    muscleGroup: { type: String, required: true },
    sets: { type: Number, required: true },
    reps: { type: Number, required: true },
    weight: { type: Number, required: true },
    date: { type: Date, required: true }
});

const ExerciseLog = model('ExerciseLog', exerciseLogSchema);
module.exports = ExerciseLog;