// NodeJS is the language used for Express.js.
//
// NodeJS is a specific flavor of EcmaScript, and therefore, JavaScript
// augmented by the NodeJS engine.

// NOTE: NodeJS is the language, but it is written in C, not JavaScript.
// Express.js is a node module.

// Import path module, the native NodeJS module that supports path operations:

const path = require('path');

// Import Express module:

const express = require('express');

// Instantiate an instance of Express: expose the createApplication() function.

const app = express();

// Serve up static files:

app.use( express.static('public') );

// all() is a method that takes two arguments as follows:
//
// 1.  The route
// 2.  The callback function to run if the route is requested.

app.all('/', (request, response) =>   {

    // Express handles the basic  headers for the request.

    // response.send('<h1>This  is the home page!</h1>');

    // Above commented out in favor of sending a response of static HTML,  etc.

    // FOR DIAGNOSTIC PURPOSES ONLY:

    console.log( path.join(__dirname + '/node.html') );

    response.sendFile( path.join(__dirname + '/node.html') );

});

app.all('*', (request, response) => {

    response.send('<h1>Sorry, this page does not exist.</h1>');
    
});

app.listen(3000);

console.log('The server is listening on port 3000...');
