const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please enter album title.'],
    minLength: [3, 'Title must be at least three characters.']
  },
  artist: {
    type: String,
    required: [true, 'Please enter album artist.'],
    minLength: [3, 'Artist must be at least three characters.']
  },
  description: {
    type: String,
    required: [true, 'Please enter album description.'],
    minLength: [3, 'Description must be at least three characters.']
  },
  cover: {
    type: String,
    required: [true, 'Please enter URL of album cover image.']
  },
  isOwned: {
    type: Boolean,
    default: false,
  },
  type: String,
  genre1: String,
  genre2: String,
  genre3: String,
}, { timestamps: true });

const Album = mongoose.model('Album', albumSchema);
module.exports = Album;
