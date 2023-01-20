const express = require("express");
const albumRouter = express.Router();

const {
  create,
  findAll,
  findOne,
  updateOne,
  deleteOne,
} = require("../controllers/album.controller");

albumRouter
  .route('/')
  .get(findAll)
  .post(create);

albumRouter
  .route('/:id')
  .get(findOne)
  .put(updateOne)
  .delete(deleteOne);

module.exports = albumRouter;
