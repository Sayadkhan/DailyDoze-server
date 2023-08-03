const User = require("../models/user.model");

const loginUser = async (req, res) => {
  res.json({ message: "login" });
};

const signupUser = async (req, res) => {
  res.json({ message: "signup" });
};

module.exports = {
  loginUser,
  signupUser,
};
