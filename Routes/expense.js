const express = require("express");
const expenseController = require("../controllers/expense");

var router = express.Router();

router.get("/", expenseController.home);
router.get("/test", expenseController.test);
router.post("/save-expense", expenseController.saveExpense);
router.get("/expenses", expenseController.getExpenses);
router.get("/expense/:id", expenseController.getExpense);
router.put("/expense/:id",expenseController.updateExpense);
router.delete("/expense/:id",expenseController.deleteExpense);

module.exports = router;
