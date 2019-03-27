const mongoose = require("mongoose");
const app = require("./app");
const port = 4000;

mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost:27017/expense-manager", {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Connected to database successfully");

    // Create server
    app.listen(port, () => {
      console.log("Server running correctly");
    });
  })
  .catch(err => console.log(err));
