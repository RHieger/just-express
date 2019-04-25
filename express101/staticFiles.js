// staticFiles.js: Introduced in Lecture 14

// Import Express module:

const express  = require('express');

// Invoke Express to instantiate our app:

const app = express();

// app includes a use() method that specifies what middleware is used.
// The use method takse only one argument: the name of the middleware
// you intend to use for your application.

app.use( express.static('./public') );

// NOTE: express.static does not require any software installation as it
// is a module of Express, itself.


// Configure listing port for Express server:

app.listen(3000);

// Log listening status to console:

console.log('Server is listening on port 3000...');
