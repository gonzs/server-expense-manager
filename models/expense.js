var mongoose = require('mongoose');
var schema = mongoose.Schema;

var expenseSchema = schema({
    id: Number,
    category: String,
    text: String,
    value: Number,
});

module.exports = mongoose.model('Expense',expenseSchema);