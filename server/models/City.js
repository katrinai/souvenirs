const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citySchema = new Schema({
  cityname: String,
  country: String
});

const City = mongoose.model("City", citySchema);
module.exports = City;
