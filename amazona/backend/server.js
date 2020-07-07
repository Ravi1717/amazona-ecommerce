const express = require("express");

const app = express();

app.get("/api/products", (req, res) => {
  res.send("hello world");
});

app.listen(5000, () => {
  console.log("Server started at http://localhost:5000");
});
