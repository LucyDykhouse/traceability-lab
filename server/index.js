const express = require('express');
const path = require('path');

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