// expressRouting.js
//
// Exploration of basic routing provided by Express.js:

// Instantiate object instance of type express:

const express = require('express');

// Invoke express to instantiate our app object:

const app = express();

// Now app() server is configured.

// app() object has a few methods (HTTP/REST Verbs):

// NOTE: The methods below correspond to CRUD in a database. (Create, Read, Update, Delete)

// 1. get()             -- default method used by all browsers to GET resources from a server
//                         (Equivalent to READ)
//
// 2. post()            -- place new material on a server
//                         (Equivalent to CREATE)
//
// 3. delete()          -- delete a resource from a server
//                         (Equivalent to DELETE)
//
// 4. put()             -- make changes to existing resources on a server
//                         (Equivalent to UPDATE)
//
// 5. all()             -- this method is specific to Express, and accepts any method

// All above methods take 2 arguments:
//
// 1. path
// 2. Callback method used when request that matches THIS verb is made to the path
//    specified in the request.

//  Define simple routing:

// app.all('/', (request, response) => {
//     response.send('<h1>Welcome to the home page!</h1>');
// });

app.get('/', (request, response) =>  {

    // FOR DIAGNOSTIC PURPOSES ONLY:

    console.log(request);

    response.send('<h1>Welcome to the home GET page!</h1>');
    
});

app.post('/', (request, response) =>  {
    response.send('<h1>Welcome to the home POST page!</h1>');
});

app.delete('/', (request, response) =>  {
    
});

app.put('/', (request, response) =>  {
    
});

// Set port for express server:

app.listen(3000);

console.log('Server is listening on port 3000...');