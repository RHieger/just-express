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

// Include cookieParser() module:

const cookieParser  = require('cookie-parser');


// Add helmet support:

app.use( helmet() );

// Support rendering of static content:

app.use( express.static('public') );

// Parse  JSON and urlencoded data into request.body object:

app.use( express.json() );

app.use( express.urlencoded() );

// Support for cookies:

app.use( cookieParser() );

// Import path module:

const path = require('path');

// Set view engine for Express:

app.set('view engine', 'ejs');

// Set path for app views:

app.set( 'views', path.join(__dirname, 'views') );

// Middleware to respond to failed logins:

app.use(  (request, response, next) => {

    if (request.query.msg === 'fail')  {

        response.locals.msg = `
            Sorry. This username and password combination
            does not exist.
        `;

    }   else  {

        response.locals.msg =  '';

    }   // end if-else

    // Proceed to next  block  of  middleware code:
        
    next();

}); // end app.use()

// Basic Routing configuration:

app.get('/', (request, response, next) => {
    response.send('Sanity Check.')
});

// Login page route:

app.get('/login', (request, response, next) =>  {

    // FOR DIAGNOSTIC PURPOSES ONLY—
    // The request object has a query property in Express, as seen below:

    // console.log(request.query);

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

        // NOTE: The ? mark is a special character in a URL. Everything after
        // the question mark is part  of the query string. Preceeding the
        // question mark is the actual path of the URL. In this case, 'msg'
        // is the key of a key-value pair. If there is more than one such
        // key value pair, additional ones are preceded by the ampersand (&).
        //
        // VERY IMPORTANT: The only appropriate use case for the query string
        // is inclusion of insecure data, that is data that is not of a
        // sensitive nature. You should never put social security numbers, or
        // credit card numbers in a query string, for example.

        response.redirect('/login?msg=fail&test=hello');

    }   // end if-else

});

// Route for welcome page:

app.get('/welcome', (request, response, next) =>  {

    response.render('welcome', {

        username: request.cookies.username 

    });

});

// app.param() takes 2 arguments:
//
// 1. Parameter to look for in the route
// 2. The callback to run (with the usuals)

app.param('id', (request, response, next, id)  => {

    // FOR DIAGNOSTIC PURPOSES ONLY:

    console.log("Params called: ", id);

    // if the id has something to do with stories...
    // if the id has something to do with blog...

    next();

});

// Parameterized Route for stories:

app.get('/story/:storyId', (request, response, next) =>  {

    // The request.params object always exists. This is the first time
    // it is being used.
    
    // In a route, any time something has a colon in front of it, it is
    // a wildcard. The wildcard will match anything in that slot.

    response.send(`<h1>Story ${request.params.storyId}</h1>`);

});

app.get('/story/:storyId/link', (request, response, next) =>  {

    // The request.params object always exists. This is the first time
    // it is being used.
    
    // In a route, any time something has a colon in front of it, it is
    // a wildcard. The wildcard will match anything in that slot.

    response.send(`<h1>Story ${request.params.storyId} - ${request.params.link}</h1>`);

});

// app.get('/story/1', (request, response, next) => {

//     response.send('<h1>Story 1</h1>');

// });

// app.get('/story/2', (request, response, next) => {

//     response.send('<h1>Story 2</h1>');

// });

// app.get('/story/3', (request, response, next) => {

//     response.send('<h1>Story 3</h1>');

// });

app.get('/logout', (request, response, next) => {

    // Clear the cookie for username:

    response.clearCookie('username');

    // Redirect to login page:

    response.redirect('/login');

});

// Set port on which nodemon listens for HTTP traffic:

app.listen(3000);

// Log server status to console:

console.log('Listening on Port 3000...');
