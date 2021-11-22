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
    rollbar.info('Javascript file served successfully');
});

app.get("/styles", (req, res) => {
    rollbar.info('HTML file served successfully');
    res.sendFile(path.join(__dirname, "../index.css"));
});

app.get('/products', (req, res) => {
    try {
        rollbar.log('Navigated to products page');
        res.sendFile(path.join(__dirname, '../products.html'));
    } catch (err) {
        console.log(err);
        rollbar.error('The products page isn\t working!')
    }
});

app.get('/new-products', (req, res) => {
    try {
        rollbar.log('Navigated to new-products page');
        res.sendFile(path.join(__dirname, '../new-products.html'));
    } catch (err) {
        console.log(err);
        rollbar.error('The new products page isn\t working!')
    }
});

app.get('/contact', (req, res) => {
    try {
        rollbar.log('Navigated to contact page');
        res.sendFile(path.join(__dirname, '../contact.html'));
    } catch (err) {
        console.log(err);
        rollbar.error('The contact page isn\t working!')
    }
});

const port = process.env.PORT || 4005;

app.listen(port, () => console.log(`Server is up on port ${port}`));