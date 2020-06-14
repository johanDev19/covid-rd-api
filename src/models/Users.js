const mongoose = require("mongoose");

const Users = mongoose.model("Users", {
  name: String,
  lastName: String,
  email: { type: String, trim: true, unique: true },
  password: String,
  created: { type: Date, default: Date.now() },
});

module.exports = Users;
