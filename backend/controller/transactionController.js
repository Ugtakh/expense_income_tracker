const { sql } = require("../config/pgDb");

const getAllTransaction = async (req, res) => {
  const { userId } = req.params;
  console.log("userId", userId);
  try {
    const transactions =
      await sql`SELECT tr.name, tr.amount, tr.created_at, tr.id, tr.transaction_type, ct.iconname, ct.iconcolor FROM transactions tr INNER JOIN category ct ON tr.category_id=ct.id WHERE tr.user_id=${userId} ORDER BY created_at DESC`;

    res.status(200).json({ message: "success", transactions });
  } catch (error) {
    console.log("ERR", error);
    res.status(500).json({ message: error.message });
  }
};

const getBarGraphData = async (req, res) => {
  try {
    const { userId } = req.params;
    const barGraphData = await sql`
      SELECT
        EXTRACT(YEAR FROM updated_at) AS year,
        EXTRACT(MONTH FROM updated_at) AS month,
        transaction_type,
        SUM(amount) AS total_amount
      
      FROM
        transactions
      GROUP BY
        transaction_type, year, month;
    `;
    console.log(barGraphData);
  } catch (error) {
    console.log("ERR", error);
    res.status(500).json({ message: error.message });
  }
};

const createTransaction = async (req, res) => {
  try {
    console.log("TRANSACTION-POST");
    const {
      userId,
      categoryId,
      amount,
      transaction_type,
      description,
      transaction_name,
      updated_at,
    } = req.body;

    console.log(req.body);

    const data =
      await sql`INSERT INTO transactions(user_id, category_id, name, amount, description, transaction_type, updated_at) VALUES(${userId}, ${categoryId}, ${transaction_name}, ${amount}, ${description}, ${transaction_type}, ${updated_at}) RETURNING *`;
    res.status(201).json({ message: "success", transaction: data[0] });
  } catch (error) {
    console.log("ERR", error);
    res.status(500).json({ message: "failed" });
  }
};

const getTotalIncomeExpense = async (req, res) => {
  try {
    const { userId } = req.body;

    const data =
      await sql`SELECT transaction_type, SUM(amount) as total FROM transactions GROUP BY transaction_type`;
    console.log("data", data);
    const [inc] = data.filter((el) => el.transaction_type === "INC");
    const [exp] = data.filter((el) => el.transaction_type === "EXP");
    console.log("INC", inc);
    console.log("EXP", exp);
    res.status(201).json({
      message: "success",
      totalIncome: inc.total,
      totalExpense: exp.total,
    });
  } catch (error) {
    console.log("ERR", error);
    res.status(500).json({ message: "failed" });
  }
};

module.exports = {
  createTransaction,
  getAllTransaction,
  getTotalIncomeExpense,
};
