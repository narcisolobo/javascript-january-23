const Todo = require('../models/todo.model');

const message = (req, res) => {
  res.json("Hello World");
};

const create = (req, res) => {
  Todo.create(req.body)
    .then(todo => res.status(201).json(todo))
    .catch(err => res.status(400).json(err));
};

module.exports = { message, create };
