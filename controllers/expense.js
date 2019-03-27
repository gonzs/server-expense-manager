const Expense = require("../models/expense");

const controller = {
  home: (req, res) => {
    return res.status(200).send({
      message: "Home Page"
    });
  },

  test: (req, res) => {
    return res.status(200).send({
      message: "Test Page"
    });
  },

  saveExpense: (req, res) => {
    let expense = new Expense();
    let params = req.body;
    expense.id = params.id;
    expense.category = params.category;
    expense.text = params.text;
    expense.value = params.value;

    expense.save((err, expenseStored) => {
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
  },

  getExpenses: (req, res) => {
    Expense.find({})
      .sort("category")
      .exec((err, expenses) => {
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

  getExpense: (req, res) => {
    let expenseId = req.params.id;

    //Expense.findById(expenseId, (err, expense) => {
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
