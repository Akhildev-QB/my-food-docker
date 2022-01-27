const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema({
  _id: { type: Number, required: true },
  name: String,
  category: String,
  area: String,
  instructions: String,
  image: String,
  source: String,
  youtube: String,
});

module.exports = mongoose.model("Food", foodSchema);
