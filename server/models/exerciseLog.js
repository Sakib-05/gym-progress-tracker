import mongoose from 'mongoose';
const { Schema, SchemaTypes, model } = mongoose;

const exerciseLogSchema = new Schema({
    exerciseName: { type: String, required: true },
    sets: { type: Number, required: true },
    reps: { type: Number, required: true },
    weight: { type: Number, required: true },
    date: { type: Date, required: true }
})

const ExerciseLog = model('ExerciseLog', exerciseLogSchema);
export default ExerciseLog;