const router = require("express").Router()
const expenseController = require("../controller/controller");

router.post("/", expenseController.createExpense);
router.get("/view", expenseController.viewExpense);
router.delete("/delete/:id", expenseController.deleteExpense)

module.exports = router;