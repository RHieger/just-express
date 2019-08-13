var express = require('express');
var router = express.Router();

// Import movies.js data store:

const movies = require('../data/movies');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET /most_popular/... */

router.get('/most_popular', (req, res, next) => {

  // Set URL for page query:

  let page = req.query.page;

  // Give page default value of 1 to allow for queries
  // without a page.

  if (page === undefined) { page = 1; }

  // Check authentication with API Key:

  if (req.query.api_key != 123456789)  {

    res.json('Invalid API Key.');

  } else {

    let results = movies.filter(  (movie) => {

      // Return only movies that are most popular:

      return movie.most_popular;

    }); // end results()

    // Filter results to 20 pages starting with number stored
    // in page:

    const indexToStart = (page - 1) * 20;

    results = results.slice(indexToStart, indexToStart + 19);

    // Output JSON results to browser:

    res.json( {results} );

  } // end if-else

}); // end router.get('/most_popular')

module.exports = router;
