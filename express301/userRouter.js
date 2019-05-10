// userRouter.js
//
// This module contains the route for '/user' and works
// in concert with the routerApp.js module to send
// responses for HTTP requests.

// Robert Hieger
// May 10, 2019

// Import Express module:

const express = require('express');

// Instantiate object of type Router()

let router = express.Router();

const validateUser = (request, response, next) => {

    response.locals.validated = true;

    console.log("Validated!");

    next();

};

//  Set  up Middleware:

// validateUser is middleware that will only be added
// to this router—-namely, userRouter.js.

router.use(validateUser);

// DEFINE ROUTES:

router.get('/', (request, response, next) => {

    // FOR DIAGNOSTIC PURPOSES ONLY:

    response.json({
        msg: 'User Router works!!'
    });

}); // end router.get('/')

// Export module:

module.exports = router;
