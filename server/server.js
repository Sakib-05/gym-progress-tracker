// server/server.js

const express = require('express');
require('dotenv').config(); // Loads environment variables from a .env file

const app = express();
const PORT = process.env.PORT || 5001; // Use port from .env or default to 5001

app.get('/', (req, res) => {
    res.send('Hello from the Gym Tracker API!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});