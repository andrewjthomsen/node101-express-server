// import files and packages up here
const express = require("express");
const data = require("./data");
const morgan = require("morgan");
// create your express server below
const app = express();

// add your routes and middleware below
app.use(morgan("dev"));
app.get("/", (req, res) => {
  res.status(200).send("Express Server is working!");
});

app.get("/data", (req, res) => {
  res.status(200).send(data);
});
app.get("*", (req, res) => {
  res.status(404).send("Error: page not found!");
});
// finally export the express application
module.exports = app;
