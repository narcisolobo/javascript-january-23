const mongoose = require("mongoose");

const albumSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter title."],
      minLength: [2, "Title must be at least two characters."],
    },
    artist: {
      type: String,
      required: [true, "Please enter artist."],
      minLength: [2, "Artist must be at least two characters."],
    },
    numTracks: {
      type: Number,
      required: [true, "Please enter number of tracks."],
      min: [1, "Albums must have at least one track."],
    },
    isOwned: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Album = mongoose.model('Album', albumSchema);
module.exports = Album;
