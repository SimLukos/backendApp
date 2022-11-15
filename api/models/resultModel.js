const mongoose = require("mongoose");

const scoreboardResultSchema = mongoose.Schema({
  scoreboard_id: { type: String, required: true },
  points: { type: Number },
  title: { type: String, required: true },
  id: { type: String, required: false },
});

module.exports = mongoose.model("Result", scoreboardResultSchema);
