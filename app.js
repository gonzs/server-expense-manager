const express = require("express");
const bodyParser = require("body-parser");

// Config of express app
const app = express();

// Load routes files
const expense_routes = require("./routes/expense");

// Middlewares (do before the execution of the API )
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuration Headers and CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// Routes
app.use("/api", expense_routes);

// Export
module.exports = app;
