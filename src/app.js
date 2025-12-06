const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello from stable version!" });
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App running on port ${port}`));

module.exports = app; // important for tests
