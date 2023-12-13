const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const imageRoutes = require("./routes/imageRoutes");

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/images", express.static(path.join(__dirname, "images/")));

// Authentication
app.use("/auth", authRoutes);
//http://localhost:8008/api/image
app.use("/api/image", imageRoutes);

app.listen(PORT, () => {
  console.log(`Сервер ${PORT} дээр аслаа.`);
});
