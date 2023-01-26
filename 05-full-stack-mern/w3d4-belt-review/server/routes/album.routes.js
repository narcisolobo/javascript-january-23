const express = require("express");
const albumRouter = express.Router();
const {
  createAlbum,
  findAllAlbums,
  findOneAlbum,
  updateOneAlbum,
  deleteOneAlbum,
} = require("../controllers/album.controller");

albumRouter
  .route('/')
  .get(findAllAlbums)
  .post(createAlbum);

albumRouter
  .route('/:id')
  .get(findOneAlbum)
  .put(updateOneAlbum)
  .delete(deleteOneAlbum);

module.exports = albumRouter;
