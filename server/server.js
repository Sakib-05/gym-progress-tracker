// server/server.js

const express = require('express');
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5001; // Use port from .env or default to 5001

require('dotenv').config(); // Loads environment variables from a .env file

mongoose.connect(process.env.ATLAS_URI)

const exerciseLogsRouter = require('./routes/exerciseLogs');
app.use('/api/exercise-logs', exerciseLogsRouter); // All requests to this URL go to the router


app.get('/', (req, res) => {
    res.send('Hello from the Gym Tracker API!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});