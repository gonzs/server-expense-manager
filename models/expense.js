var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Schema for DB
var expenseSchema = Schema({
  id: Number,
  category: String,
  text: String,
  value: Number
});

module.exports = mongoose.model("Expense", expenseSchema);
