// const PersonController = require('../controllers/person.controller');
const { create, message, findAll, findOne, updateOne } = require('../controllers/todo.controller');

const express = require('express');
const todoRouter = express.Router();
// module.exports = function(app){
//     app.get('/api', PersonController.index);
// }

todoRouter
  .route('/')
  .get(message);

todoRouter
  .route('/todos')
  .post(create)
  .get(findAll);

todoRouter
  .route('/todos/:id')
  .get(findOne)
  .put(updateOne);

module.exports = todoRouter;
