var express = require('express');
var router = express.Router();

/* GET search page. */
// equivalent to /search/...
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  // FOR DIAGNOSTIC PURPOSES ONLY:
  res.json('Test...');
});

module.exports = router;
