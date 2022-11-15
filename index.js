const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const scoreboardRouts = require("./api/routes/scoreboardRouts");
const resultsRouts = require("./api/routes/resultRouts");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

//mongoose connection
require("dotenv").config();
mongoose
  .connect(process.env.MONGO_CONNECTION, { useNewUrlParser: true })
  .then(console.log("connected"))
  .catch((err) => {
    console.log("xxxxxxxxxxxxxxxxxx");
    console.log(err);
  });

app.use(scoreboardRouts);
app.use(resultsRouts);

app.listen(3000, () => {
  console.log("Server started on port 3000.");
});
