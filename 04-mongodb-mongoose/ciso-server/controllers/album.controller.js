const Album = require("../models/album.model");

const create = (req, res) => {
  Album.create(req.body)
    .then((album) => res.status(201).json(album))
    .catch((err) => res.status(400).json(err));
};

const findAll = (req, res) => {
  Album.find()
    .then((albums) => res.status(200).json(albums))
    .catch((err) => res.status(400).json(err));
};

const findOne = (req, res) => {
  const { id } = req.params;
  Album.findById(id)
    .then((album) => res.status(200).json(album))
    .catch((err) => res.status(400).json(err));
};

const updateOne = (req, res) => {
  const { id } = req.params;
  Album.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
    .then((album) => res.status(200).json(album))
    .catch((err) => res.status(400).json(err));
};

const deleteOne = (req, res) => {
  const { id } = req.params;
  Album.findByIdAndDelete(id)
    .then((album) => res.status(200).json(album))
    .catch((err) => res.status(400).json(err));
};

module.exports = { create, findAll, findOne, updateOne, deleteOne };
