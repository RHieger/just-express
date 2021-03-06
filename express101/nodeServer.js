// nodeServer.js
//
// This is a plain vanilla node server that does not take advantage
// of the Epxress framework.
//
// Robert Hieger
// April 18, 2019

// Include http module of node to handle HTTP requests.

const http = require('http');

// The http module of node exposes a createServer() method.
// The http modle is native to NodeJS.
// The createServer() method has 1 argument, which is a callback method.

// The callback has two arguments, as follows:
//
// 1. request, most  often truncated to req
// 2. response, most often truncated to res
//
// Personally, I prefer the explicit versions, as they are more expressive.

// Import Node file system module:

const fs = require('fs');

// NOTE: fs gives access to the file system of the machine on which it is installed.

// Instantiate a node servere:

const server = http.createServer( (request, response)  => {

    // Log server request to console:

    console.log("A request was made to: $(request)");

    if (request.url  === '/')  {

        // Log user request to the console:

        console.log(request.url)

        // The response method is used to respond to the message sent
        // by the requester.

        // The http message is comprised of:
        //
        // 1. The start line (NodeJS handles this for us.)
        // 2. The header
        // 3. The body

        // The header is created by using the writeHead() method, and it
        // takes 2 arguments, as follows:

        // 1. The http status code
        // 2. An object for the mime type

        response.writeHead(200, {'content-type': 'text/html'} );

        // Write http request body response:

        // response.write('');
        // response.write is commented out in favor of using the appropriate
        // file system commands for serving up static content.

        // Set up file access for node.html:

        const homePageHTML = fs.readFileSync('node.html');

        response.write(homePageHTML);

        // Close connection to remote server:

        response.end();

    }   else if (request.url ===  '/node-js.png') {

        response.writeHead( 200, {'content-type': 'image/png'} );

        const image = fs.readFileSync('node-js.png');

        response.write(image);

        // Close connection to remote server:

        response.end();

    } else  {

        response.writeHead(404, {'content-type': 'text/html'} );

        // Write http request body response:

        response.write('<h4>Sorry, this isn\'t the page you\'re looking for!</h4>');

        // Close connection to remote server:

        response.end();

    }

});
    
// createServer() returns an object with a listen() method.
// listen() takes one argument, which is the port number on which to listen
// for http traffic.

server.listen(3000);

