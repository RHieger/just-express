var express = require('express');
var router = express.Router();

/* GET home page. */

// NOTE: The purpose of customizations in this module is to
// practice customizing HTTP headers, which will be quite
// necessary in app development.

router.get('/', function(req, res, next) {

  // Set date on HTTP Header to July 20, 1969:

  // const date = new Date(1969, 6, 20);

  // res.set('Date', date);

  // NOTE: The no-store setting can be helpful during a development cycle,
  // so that changes to a header are immediately reflected without your
  // having to fight the browser cache.

  // res.set('Cache-Control', 'no-store');

  // Set content type to HTML:

  // res.set('Content-Type', 'text/html');

  // fresh returns true if cache is not stale:

  // console.log('Cache is fresh: '  + req.fresh);

  // stale returns true if cache is stale:

  // console.log('Cache is stale: ' + req.stale);

  console.log('Accepts JSON: ' + req.accepts('json', 'html') );

  res.render('index', { title: 'Express' });


});

module.exports = router;
