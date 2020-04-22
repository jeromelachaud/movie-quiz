const mongoose = require('mongoose')
const timestamp = require('mongoose-timestamp')

const HighScoreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  score: {
    type: Number,
    required: true,
    trim: true,
  },
  time: {
    type: Number,
    required: true,
    trim: true,
  },
})

HighScoreSchema.plugin(timestamp)

module.exports = mongoose.model('HighScore', HighScoreSchema)
