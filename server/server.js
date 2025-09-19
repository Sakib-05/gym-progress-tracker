// server/server.js

const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5001; // Use port from .env or default to 5001
require('dotenv').config(); // Loads environment variables from a .env file

app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

mongoose.connect(process.env.ATLAS_URI)
    .then(() => console.log("MongoDB connection established successfully"))
    .catch(err => console.log(err));

const exerciseLogsRouter = require('./routes/exerciseLogs');
app.use('/api/exercise-logs', exerciseLogsRouter);


app.get('/', (req, res) => {
    res.send('Hello from the Gym Tracker API!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});