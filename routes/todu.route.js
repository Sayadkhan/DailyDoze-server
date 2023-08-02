const express = require("express");
const {
  postTodo,
  getAllTodo,
  getSingleTodo,
  deleteTodo,
  updateTodo,
} = require("../controllers/todo.controllers");

// router
const router = express.Router();

// routes
router.get("/", getAllTodo);

router.get("/:id", getSingleTodo);

router.post("/", postTodo);

router.delete("/:id", deleteTodo);
router.patch("/:id", updateTodo);

module.exports = router;
