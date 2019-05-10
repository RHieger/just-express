// routerApp.js
//
// This module contains all logic for the Express server
// that handles all HTTP requests. Working in concert
// with the router.js file, which contains all routes
// defined for use by the Express Router module, it
// serves all data requested in the HTTP requests
// it receives.

// Robert Hieger
// May 10, 2019

// Import Express module:

const express = require('express');

// Instantiate Express app object:

const app = express();

// Import helmet third party module to provide nominal security:

const helmet = require('helmet');

// Configure Middleware for app:

app.use( helmet() );                    // Add helmet to middleware for app

app.use( express.urlencoded() );        // Add Express URL encoding to app

app.use( express.json() );              // Add JSON support to app'

app.use( express.static('public') );    // Add support for static files to app

// Import theRouter.js module:

const router =  require('./theRouter');

// Import userRouter.js module:

const userRouter = require('./userRouter');

app.use('/', router);                   // Add Express Router support to app

app.use('/user', userRouter);           // Add userRouter to app

// END Middleware ============================================================

// Configure listening port for Express Server:

app.listen(3000);

// Feed back server status to console:

console.log('Server is listening on port 3000...');
