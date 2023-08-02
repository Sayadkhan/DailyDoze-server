const mongoose = require("mongoose");

const Todo = require("../models/todo.model");

// get all todos
const getAllTodo = async (req, res) => {
  const todos = await Todo.find({});

  res.status(200).json(todos);
};

// get a todo
const getSingleTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalied Id" });
  }

  const todo = await Todo.findById(id);
  if (!todo) {
    return res.status(404).json({ error: "no projects found" });
  }

  res.status(200).json(todo);
};

// post a new todo
const postTodo = async (req, res) => {
  const data = req.body;

  try {
    const todo = await Todo.create({
      ...data,
    });
    res.status(200).json(todo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// delete a todo
const deleteTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalied Id" });
  }

  const todo = await Todo.findOneAndDelete({ _id: id });

  if (!todo) {
    return res.status(400).json({ error: "no Todo Found" });
  }

  res.status(200).json(todo);
};

// update a todo

const updateTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalied Id" });
  }

  const todo = await Todo.findByIdAndUpdate({ _id: id }, { ...req.body });

  if (!todo) {
    return res.status(400).json({ error: "no Todo Found" });
  }

  res.status(200).json(todo);
};

module.exports = {
  postTodo,
  getAllTodo,
  getSingleTodo,
  deleteTodo,
  updateTodo,
};
