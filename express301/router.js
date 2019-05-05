// router.js
//
// Module for app routes
//
// Robert Hieger
// May 5, 2019

// Import Express module:

const express = require('express');

//  Instantiate an object of type express:

const app = express();

// Import third party helmet module:

const  helmet = require('helmet');

// SET UP MIDDLEWARE:

app.use( helmet() );

app.use( express.urlencoded() );

app.use( express.json() );

app.use( express.static('public') );

// END MIDDLEWARE =====================

