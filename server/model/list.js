const mongoose = require("mongoose");

const List = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("List", List);
