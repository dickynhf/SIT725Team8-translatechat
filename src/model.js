const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  request: { type: String },
  response: { type: String },
});

module.exports.data = new mongoose.model("Data", dataSchema);
