const express = require("express");
const app = express();
const cors = require("cors");

const chefData = require("./data/chef.json");
const chinesFood = require("./data/chiness.json");

const port = process.env.PORT || 5000;
app.use(cors());

app.get("/", (req, res) => {
  res.send(chefData);
});
app.get("/chines", (req, res) => {
  res.send(chinesFood);
});
app.get("/test", (req, res) => {
  res.send({test: "Server side successfully run"});
});

app.get("/chef/:id", (req, res) => {
  const _id = req.params.id
  const singleData = chefData.find(d=> d.id == _id)
  res.send(singleData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
