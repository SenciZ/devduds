const express = require("express");
const path = require("path");
const ctrl = require("./controller");
const app = express();
app.use(express.json());

const { seed } = require("./seed");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

app.get("/index.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

app.get("/mens.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../mens.html"));
});

app.get("/womens.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../womens.html"));
});

app.get("/viewItem.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../viewItem.html"));
});

app.get("/css", (req, res) => {
  res.sendFile(path.join(__dirname, "../style.css"));
});

app.get("/viewItemcss", (req, res) => {
  res.sendFile(path.join(__dirname, "../viewItem.css"));
});

app.get("/cssreset", (req, res) => {
  res.sendFile(path.join(__dirname, "../reset.css"));
});

app.get("/js", (req, res) => {
  res.sendFile(path.join(__dirname, "../main.js"));
});

app.get("/viewItem", (req, res) => {
  res.sendFile(path.join(__dirname, "../viewItem.js"));
});

app.get("/mensjs", (req, res) => {
  res.sendFile(path.join(__dirname, "../mensjs.js"));
});

app.get("/womensjs", (req, res) => {
  res.sendFile(path.join(__dirname, "../womensjs.js"));
});

app.post("/seed", seed);

app.get("/products", ctrl.getAllProducts);

app.get("/featuredproducts", ctrl.getFeaturedProducts);

app.get("/clickedproduct:id", ctrl.getClickedProduct);

app.get("/menproducts", ctrl.getAllMenProducts);

app.get("/womensproducts", ctrl.getAllWomensProducts);

app.post("/subscribe", ctrl.subscribe);

const port = process.env.PORT || 4005;

app.listen(port, () => {
  console.log(`Listenting on port ${port}`);
});
