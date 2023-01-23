const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    task: String,
    isComplete: Boolean,
  },
  { timestamps: true }
);

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;
