// ejsPractice.js
//
// Practice rendering files using EJS.
//
// Robert Hieger
// April 27, 2019

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

// Basic routing setup:

// 1. We pass that response.render() 2 things:
//    a) the file we want to use
//    b) The data we want to send to that file
//
// 2. Express uses the Node module for our specified view engine and
//    and parsess the file. What this means is that the view engine
//    takes the HTML, CSS  and Javascript and combines it with
//    whatever other code there is in the file.
//
// 3. The final result is the compiled content that the browser can read:
//    a) HTML
//    b) CSS
//    c) JavaScript

app.get('/', (request, response, next) => {

    response.render('index');

}); // end app.get()

// Specify server listening port:

app.listen(3000, () => {
    console.log(`Server listening on port 3000...`);
});
