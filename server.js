require("dotenv").config();

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
const TOKEN = process.env.BOT_TOKEN; // example

app.get("/", (req, res) => {
  res.send("Backend running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
