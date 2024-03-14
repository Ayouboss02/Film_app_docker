const { Schema, model } = require('mongoose');

const movieSchema = new Schema({
  title: String, // 'movie' | 'character'
  episode_id: String,
  producer: String
});

const Movie = model('Movie', movieSchema);

module.exports = Movie;