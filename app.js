const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Load files

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS

// Routes
app.get('/', (req, res) => {
    res.status(200).send(
        "<h1>Home Page</h1>"
    );
});

app.get('/test', (req, res) => {
    res.status(200).send({
        message: 'Hellow world from test route'
    });
});


// Export
module.exports = app;