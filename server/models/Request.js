const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const requestSchema = new Schema({
  title: String,
  text: String,
  endDate: String,
  _owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  _city: {
    type: Schema.Types.ObjectId,
    ref: "City"
  }
});

const Request = mongoose.model("Request", requestSchema);
module.exports = Request;
