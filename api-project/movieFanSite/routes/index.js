var express = require('express');
var router = express.Router();

// Import request module to support HTTP requests:

const request = require('request');

// Set up API Key:

// const apiKey = 'd1923f949a5469388df50e0f61d9bdfb';

const apiKey = '123456789';   // apiKey for local API

// Configure API:

// const apiBaseUrl = 'http://api.themoviedb.org/3';

const apiBaseUrl = 'http://localhost:3030';   // base URL for local API

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

//  Get detail page:

// NOTE: '/movie/:id'is a parameterized, or wildcard route.
//       That means that ':id' is going to be stored in
//       res.params.

router.get('/movie/:id', (req, res, next) => {

  // FOR DIAGNOSTIC PURPOSES ONLY:

  // res.json(req.params.id);

  // ACTIVE CODE:

  const movieId = req.params.id;  // <-- id for path

  // Piece together URL for movie detail view:

  const  thisMovieUrl = `${apiBaseUrl}/movie/${movieId}?api_key=${apiKey}`;

  // FOR DIAGNOSTIC PURPOSES ONLY:
  
  // res.send(thisMovieUrl);

  // ACTIVE CODE:

  request.get(thisMovieUrl, (error, response, movieData) => {

    // Set up parsed data from HTTP request:

    const parsedData =  JSON.parse(movieData);

    // Render returned data:

    res.render('single-movie', {
      parsedData
    });

  }); // end request.get(thisMovieMurl)

});

// Search Route:

router.post('/search', (req, res, next)  => {

  // FOR DIAGNOSTIC PURPOSES ONLY:

  // res.send('Sanity Check...');

  // Store value of the user search term:

  const userSearchTerm  = encodeURI(req.body.movieSearch);
  const cat = req.body.cat;

  const movieUrl = `${apiBaseUrl}/search/${cat}?query=${userSearchTerm}&api_key=${apiKey}`;

  // FOR DIAGNOSTIC PURPOSES ONLY:

  // res.send(movieUrl);

  request.get(movieUrl, (error, response, movieData) => {

    let parsedData = JSON.parse(movieData);

    // FOR DIADGNOSTIC PURPOSES ONLY

    // res.json(parsedData);

    // Check for type of search:
    
    if (cat == 'person')  {

      parsedData.results = parsedData.results[0].known_for;

    } // end if

    res.render('index', {

      parsedData: parsedData.results

    }); // end res.render('index')

  }); // end request.get(movieUrl)

}); // end router.post('/search')

module.exports = router;
