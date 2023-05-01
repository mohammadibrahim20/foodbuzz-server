const express = require("express");
const app = express();
const cors = require("cors");

const chefData = require("./data/chef.json");

const port = process.env.PORT || 5000;
app.use(cors());

app.get("/", (req, res) => {
  res.send(chefData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
