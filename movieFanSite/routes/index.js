var express = require('express');
var router = express.Router();

// Set up API Key:

const apiKey = 'd1923f949a5469388df50e0f61d9bdfb';

// Configure API:

const apiBaseUrl = 'http://api.themoviedb.org/3';

const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`;

const imageBaseUrl = 'http://image.tmdb.org/t/p/w300';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { });
});

module.exports = router;
