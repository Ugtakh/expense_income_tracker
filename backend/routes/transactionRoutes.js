const { Router } = require("express");
const {
  createTransaction,
  getAllTransaction,
} = require("../controller/transactionController");

const router = Router();

router.route("/:userId").get(getAllTransaction);
router.route("/").post(createTransaction);

module.exports = router;
