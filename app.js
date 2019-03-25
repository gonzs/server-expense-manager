const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Load files

// Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// CORS

// Routes

// Export
module.exports = app;