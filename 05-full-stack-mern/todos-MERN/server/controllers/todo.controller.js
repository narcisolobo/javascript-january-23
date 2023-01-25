const Todo = require("../models/todo.model");

const message = (req, res) => {
  res.json("Hello World");
};

const create = (req, res) => {
  Todo.create(req.body)
    .then((todo) => res.status(201).json(todo))
    .catch((err) => res.status(400).json(err));
};

const findAll = (req, res) => {
  Todo.find()
    .then((todos) => res.status(200).json(todos))
    .catch((err) => res.status(400).json(err));
};

const findOne = (req, res) => {
  const { id } = req.params;
  Todo.findById(id)
    .then((todo) => res.status(200).json(todo))
    .catch((err) => res.status(400).json(err));
};

const updateOne = (req, res) => {
  const { id } = req.params;
  Todo.findByIdAndUpdate(id, req.body)
    .then((todo) => res.status(200).json(todo))
    .catch((err) => res.status(400).json(err));
};

const deleteOne = (req, res) => {
  const { id } = req.params;
  Todo.findByIdAndDelete(id)
    .then((todo) => res.status(200).json(todo))
    .catch((err) => res.status(400).json(err));
};

module.exports = { message, create, findAll, findOne, updateOne, deleteOne };
