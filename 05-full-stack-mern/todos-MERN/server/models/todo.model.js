const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      required: [true, 'Task is required.']
    },
    isComplete: Boolean,
  },
  { timestamps: true }
);

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;
