const { Router } = require("express");
const {
  createTransaction,
  getAllTransaction,
  getTotalIncomeExpense,
} = require("../controller/transactionController");

const router = Router();

router.route("/total").get(getTotalIncomeExpense);
router.route("/:userId").get(getAllTransaction);
router.route("/").post(createTransaction);

module.exports = router;
