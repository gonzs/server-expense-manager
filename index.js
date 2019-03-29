const mongoose = require("mongoose");
const app = require("./app"); // Import express app
const port = 4000;

mongoose.Promise = global.Promise;
// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/expense-manager", {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Connected to database successfully");

    // Create server and Listen
    app.listen(port, () => {
      console.log("Server running correctly");
    });
  })
  .catch(err => console.log(err));
