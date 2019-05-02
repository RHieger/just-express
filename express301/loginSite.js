// loginSite.js
//
// Nerve center and entry point for app.
//
// Robert Hieger
// May 1, 2019

// Import express module:

const express = require('express');

// Invoke express application (createApplication method):

const app = express();

// Include helmet module for HTTP Security:

const helmet = require('helmet');


// Invoke helmet support:

app.use( helmet() );

// Support rendering of static content:

app.use( express.static('public') );

// Parse  JSON and urlencoded data into request.body object:

app.use( express.json() );

app.use( express.urlencoded() );

// Import path module:

const path = require('path');

// Set view engine for Express:

app.set('view engine', 'ejs');

// Set path for app views:

app.set( 'views', path.join(__dirname, 'views') );

// Basic Routing configuration:

app.get('/', (request, response, next) => {
    response.send('Sanity Check.')
});

// Set port on which nodemon listens for HTTP traffic:

app.listen(3000);

// Log server status to console:

console.log('Listening on Port 3000');
