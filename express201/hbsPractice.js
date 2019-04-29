// hbsPractice.js
//
// Practice rendering files using Handlebars.
//
// Robert Hieger
// April 28, 2019

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

app.set('view engine', 'hbs');

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

// Middleware for validation:

const validateUser = (request, response, next) =>  {

   // NOTE: This is just a sample arrow function. In production, Passport
   //       and/or other third party modules dealing with validation
   //       and authorization. 

    response.locals.validated = true;

    next();

};  // end validateUser()

app.use(validateUser);

app.get('/about', (request, response, next) => {
    response.render( 'about', {} );
}); // end app.get('/about')

app.get('/', (request, response, next) => {

    // The data in the second argument is going to be appended to
    // res.locals.
    
    response.render( 'index', {
        countries: [
            {
                name: "Russia",
                capital: "Moscow",
                western: false
            },
            {
                name: "England",
                capital: "London",
                western: true
            }
        ],
        msg: "Failure!",
        msg2: "Success!",
        // HTML came from the database and we want to drop it in the template.
        html: `
            <div>
              <img src="https://static01.nyt.com/images/2018/11/11/travel/11yosemite2/merlin_145320882_abb47a0c-1a15-402a-8d30-9dcb7073e46b-superJumbo.jpg?quality=90&auto=webp"
               width="1024"
               alt="Yosemite National Park"
               title="Yosemite National Park Threatened by Brush Fires">
            </div>
        `
    });

}); // end app.get()

// Specify server listening port:

app.listen(3000, () => {
    console.log(`Server listening on port 3000...`);
});
