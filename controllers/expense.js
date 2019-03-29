const Expense = require("../models/expense");

const controller = {
  //API: Save Expense into DB
  saveExpense: (req, res) => {
    //Get last ID saved
    Expense.findOne({}, (err, lastExpense) => {
      if (err)
        return res.status(500).send({
          message: "Error when retrieving Expense"
        });

      let params = req.body;
      newExpense = new Expense();

      if (!lastExpense) newExpense.id = 1;
      // First id
      else newExpense.id = lastExpense.id + 1; // Last id + 1

      newExpense.category = params.category;
      newExpense.text = params.text;
      newExpense.value = params.value;

      // Save into DB
      newExpense.save((err, expenseStored) => {
        if (err)
          return res.status(500).send({
            message: "Error in saveExpense API method"
          });
        if (!expenseStored)
          return res.status(404).send({
            message: "Expense cannot be saved"
          });

        return res.status(200).send({
          expense: expenseStored
        });
      });
    }).sort("-id");
  },

  // API: Get all Expenses
  getExpenses: (req, res) => {
    Expense.find({}).exec((err, expenses) => {
      if (err)
        return res.status(500).send({
          message: "Error when retrieving Expenses"
        });

      if (!expenses)
        return res.status(404).send({
          message: "Expenses not found"
        });

      return res.status(200).send({
        expenses
      });
    });
  },

  // API: Get an Expense by ID
  getExpense: (req, res) => {
    let expenseId = req.params.id;

    Expense.find({ id: expenseId }, (err, expense) => {
      if (err)
        return res.status(500).send({
          message: "Error when retrieving Expense"
        });
      if (!expense)
        return res.status(404).send({
          message: "Expense not found"
        });

      return res.status(200).send({
        expense
      });
    });
  },

  // API: Update an Expense
  updateExpense: (req, res) => {
    let expenseId = req.params.id;
    let update = req.body;

    Expense.findOneAndUpdate(
      { id: expenseId },
      update,
      { new: true },
      (err, expenseUpdated) => {
        if (err)
          return res.status(500).send({
            message: "Expense not updated"
          });

        if (!expenseUpdated)
          return res.status(404).send({
            message: "Expense not found for updating"
          });

        return res.status(200).send({
          expense: expenseUpdated
        });
      }
    );
  },

  // API: Delete an Expense
  deleteExpense: (req, res) => {
    let expenseId = req.params.id;

    Expense.findOneAndDelete({ id: expenseId }, (err, expenseDeleted) => {
      if (err)
        return res.status(500).send({
          message: "Expense not removed"
        });

      if (!expenseDeleted)
        return res.status(404).send({
          message: "Expense not found for removing"
        });

      return res.status(200).send({
        expense: expenseDeleted
      });
    });
  }
};

module.exports = controller;
