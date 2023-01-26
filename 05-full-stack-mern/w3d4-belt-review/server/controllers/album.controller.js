const Album = require("../models/album.model");

/* Create an Album */
const createAlbum = (req, res) => {
  Album.create(req.body)
    .then((album) => res.status(201).json(album))
    .catch((err) => res.status(400).json(err));
};

/* Find All Albums */
const findAllAlbums = (req, res) => {
  Album.find()
    .then((albums) => res.status(200).json(albums))
    .catch((err) => res.status(400).json(err));
};

/* Find One Album */
const findOneAlbum = (req, res) => {
  const { id } = req.params;
  Album.findById(id)
    .then((album) => res.status(200).json(album))
    .catch((err) => res.status(400).json(err));
};

/* Update One Album */
const updateOneAlbum = (req, res) => {
  const { id } = req.params;
  Album.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
    .then((album) => res.status(200).json(album))
    .catch((err) => res.status(400).json(err));
};

/* Delete One Album */
const deleteOneAlbum = (req, res) => {
  const { id } = req.params;
  Album.findByIdAndDelete(id)
    .then((album) => res.status(200).json(album))
    .catch((err) => res.status(400).json(err));
};

module.exports = {
  createAlbum,
  findAllAlbums,
  findOneAlbum,
  updateOneAlbum,
  deleteOneAlbum,
};
