const express = require("express");
const { loginUser, signupUser } = require("../controllers/user.controllers");

const router = express.Router();

//login router
router.post("/login", loginUser);

//signup router
router.post("/signup", signupUser);

module.exports = router;
