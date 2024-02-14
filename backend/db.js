const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://habeelshamsudeen:MuyLHszKZTPsVi9I@cluster0.lyi1r5n.mongodb.net/PaytmApp"
);

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 30,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 30,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};
