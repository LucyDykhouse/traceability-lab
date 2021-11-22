const express = require('express');
const path = require('path');
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: 'df4ce6596e3d46fb82ad4e5ba67b43c4',
  captureUncaught: true,
  captureUnhandledRejections: true
});

const app = express();

// Endpoints
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../main.js'));
});

app.get("/styles", (req, res) => {
    res.sendFile(path.join(__dirname, "../index.css"));
});



const port = process.env.PORT || 4005;

app.listen(port, () => console.log(`Server is up on port ${port}`));