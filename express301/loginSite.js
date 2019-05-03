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

// Login page route:

app.get('/login', (request, response, next) =>  {
    response.render('login');
});

// process_login route:

app.post('/process_login', (request, response, next)  =>  {
    
    // request.body is made by urlencoded, which parses the http message
    // for sent data.

    // Set login variables:

    const username = request.body.username;

    const password = request.body.password;

    // In production code, check the database to see that the credentials are valid.
    // If they are valid:
    //
    // 1. Save the username in a cookie.
    // 2. Send user to welcome page.

    if (password === 'password')  {

        // response.cookie() takes 2 or more arguments.
        // Minimally, it takes:
        //
        // 1. The name of the cookie.
        // 2. The value to be stored to that cookie.

        response.cookie('username', username);

        // Redirect user to welcome page:

        response.redirect('/welcome');

    }   else  {

        response.redirect('/login?msg=fail');

    }   // end if-else

});

// Route for welcome page:

app.get('/welcome', (request, response, next) =>  {

   

    response.render('welcome');

});

// Set port on which nodemon listens for HTTP traffic:

app.listen(3000);

// Log server status to console:

console.log('Listening on Port 3000');
