import express from "express";

import data from "./data";

import cors from "cors";

import dotenv from "dotenv";
import config from "./config";

dotenv.config();

const mongodbUrl = config.MONGODB_URL;

const app = express();

app.use(cors());

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  const product = data.products.find((x) => x._id == productId);
  if (product) res.send(product);
  else res.status(404).send({ msg: " Product not Found" });
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
