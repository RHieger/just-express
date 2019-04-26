// appUse.js
//
// File created during Lesson 15
//
// Robert Hieger
// April 24, 2019

// Import node third party module, Express:

const  express = require('express');

// Create express app:

const app = express();

// Express is 2 things:
//
// 1. It is a router.
//
// 2. Collection of middleware that comprise a web framework.

// Illustration of Middleware:
//
// Request ---- MIDDLEWARE -------> Response
//
// A middleware function is any function that has access to the
// request, response and next objects.

// Typical sequence of middleware that occurs between server
// reuqest and response:
//
// 1. Request comes in.
// 2. We need to validate the user, sometimes.
// 3. We need to store some things in the database.
// 4. If the user submits data, it needs to be pared and stored.
// 5. Response is sent.

// Simple custom middleware examples:



const validateUser = (request, response, next) =>  {

    // Get information from the response object:

    response.locals.validated = true;

    console.log('VALIDATED RAN!');

    // Hand off control to the next middleware function
    // in the cycle.

    next();

};  // end validateUser()

//  Call validateUser():

app.use('/admin', validateUser);

// NOTE: Robert Bunch chose the old-style function statement to define
//       the above function. I opted to use the new arrow function
//       format used in ECMAScript 6 and beyond.

app.get( '/', (request, response, next)  => {

    response.send('<h1>Main Page</h1>');

    // FOR DIAGNOSTIC PURPOSES ONLY:

    console.log(response.locals.validated);

}); // end app.get()

app.get( '/admin', (request, response, next)  => {

    response.send('<h1>Admin Page</h1>');

    // FOR DIAGNOSTIC PURPOSES ONLY:

    console.log(response.locals.validated);

}); // end app.get()
app.get( '/', (request, response)  => {

    response.send('<h1>Main Page</h1>');

    // FOR DIAGNOSTIC PURPOSES ONLY:

    console.log(response.locals.validated);

}); // end app.get()

// Set listening port for express server:

app.listen(3000);

// Log server status to console:

console.log('Server listening on port 3000...');