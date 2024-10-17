const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  stdname: String,
  stdemail: String,
  stdage: Number,
});

const Student = mongoose.model("Student", userSchema);
module.exports = Student;
