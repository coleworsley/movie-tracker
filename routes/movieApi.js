const request = require('request');
const API_KEY = process.env.MOVIE_API;
const movieId = 324852;
const movieUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
function createCastUrl () {
  return `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
}

function getMovies (req, res, next) {
  request(movieUrl, function (error, response, body) {
    if (error) return next(error)
    res.status(200).send(body);
  })
}

function getCast (req, res, next) {
  request(createCastUrl(), function(error, response, body) {
    if (error) return next(error)
    res.status(200).send(body)
  })
}


module.exports = {
  getMovies: getMovies,
  getCast: getCast
}
