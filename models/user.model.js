const { UnorderedBulkOperation } = require("mongodb");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    Unique: true,
  },
  gender: {
    type: String,
  },
  job_title: {
    type: String,
  },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
