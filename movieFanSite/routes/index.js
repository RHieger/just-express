var express = require('express');
var router = express.Router();

// Import request module to support HTTP requests:

const request = require('request');

// Set up API Key:

const apiKey = 'd1923f949a5469388df50e0f61d9bdfb';

// Configure API:

const apiBaseUrl = 'http://api.themoviedb.org/3';

const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`;

const imageBaseUrl = 'http://image.tmdb.org/t/p/w300';

// Set up path to postage images:

router.use( (req, res, next) =>   {
  res.locals.imageBaseUrl = imageBaseUrl;
  next();
});

/* GET home page. */
router.get('/', function(req, res, next) {

  // Send HTTP request:

  // request takes 2 arguments:
  //   1. It takes the URL for the get operation.
  //   2. The callback, which takes 3 arguments, to run on completion of the HTTP request:
  //     a. error (if any)
  //     b. http response
  //     c. JSON data the server sent back

  request.get(nowPlayingUrl, (error, response,  movieData) => {

    // FOR DIAGNOSTIC PURPOSES ONLY:

    // console.log("======The Error======");
    // console.log(error);
    // console.log("======The Response======");
    // console.log(response);

    // ACTIVE CODE:

    const parsedData = JSON.parse(movieData);

    // FOR DIAGNOSTIC PURPOSES ONLY:

    // console.log(parsedData);

    // ACTIVE CODE:

    // res.json(parsedData); //  <-- Outputs JSON format data to browser.
    
    res.render('index', {
      parsedData: parsedData.results
    });

  });

});

module.exports = router;
