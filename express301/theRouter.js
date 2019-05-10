// theRouter.js
//
// This module contains all routes defined for use by
// the Express Router module, and works in concert
// with the routerApp.js module, provided the routes
// that it will serve in response to HTTP requests.

// Robert Hieger
// May 10, 2019

// Import Express module:

const express = require('express');

// Instantiate object of type Router()

let router = express.Router();

// Using the Router module provides separation of concerns that
// is not possible using the app.get() method to create a route.
// Also, it makes it possible to create distinctly different
// routers so that running into namespace conflicts may be avoided.

// DEFINE ROUTES:

router.get('/', (request, response, next) => {

    // FOR DIAGNOSTIC PURPOSES ONLY:

    response.json({
        msg: 'Router works!!'
    });

}); // end router.get('/')

// Export module:

module.exports = router;
