const { sql } = require("../config/pgDb");

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  await sql`INSERT INTO users(email, name, password) VALUES(${email}, ${name}, ${password})`;
  res.status(201).json({ message: "success" });
};

module.exports = { signup };
