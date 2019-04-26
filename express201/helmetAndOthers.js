// helmetAndOthers.js
//
// Exercise file for Lecture 16.
//
// Further exploration of Express as Middleware.
//
// Robert Hieger

// Import Express module:

const express = require('express');

//  Invoke Express into app object:

const app = express();

// Import helmet to address basic HTTP request security concerns:

const helmet = require('helmet');

// Support helemt-based security:

app.use( helmet() );

// Set up public folder for static content:

app.use( express.static('public') );

// Support responses with JSON payload:

app.use( express.json() );

// Support URL-encoded payloads:

app.use( express.urlencoded( {extended: false} ) );

// NOTE: Most usually, the top three above use statementss will need to appear
//       in the creation of any HTTP request. They allow for 1) serving
//       up static content, 2) passsing the data as a JSON object (the
//       de facto standard), and 3) transforming that object to URL
//       encoded data that the browser can use for generation of content.

app.post( '/ajax', (request, response) => {

    // FOR DIAGNOSTIC PURPOSES ONLY:

    console.log(request.body);

    response.json(['Testing', 1, 2, 3, 4]);

});

app.listen(3000);

console.log('Server listening on port 3000...');
