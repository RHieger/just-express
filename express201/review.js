// review.js
//
// This module will review much of what has been covered
// in the first two major study modules dealing with
// NodeJS without the assistance of Express, and then
// NodeJS working in tandem with Express.

// WHAT WE'VE COVERED SO FAR:
//
// HTTP -- tcp/udp
// TCP stands for Transmission Control Protocol
// UDP stands for User Datagram Protocol

// HTTP Benefits:
//
// 1. It's stateless
// 2. It's connectionless
// 3. It's flexible

// Anatomy of the HTTP Message:

// 1. Start Line
//      a.) The request
//      b.) The method
//      c.) The path
//      d.) Version of HTTP (most often v1.1)

// 2. Response
//     a) Version of HTTP
//     b) Status Code
//     c) Text message for status
//
// 3. Headers
//    a) Key-Value Pairs as in JSON and Item b, below:
//    b) { key: value }
//
// 4. Date (in GMT [Greenwich Mean Time] )
//
// 5. BLANK LINE
//
// 6. Body
//    a) Content

// Using Node Server,
// we learned the following:
//
// 1. Write HTTP headers
// 2. Write body
// 3. Used fs module, allowing readin of files with static content
// 3. Close HTTP connection

// With Express version of server,
// we learned:
//
//  1. Express is NodeJS
//  2.  The  app() object: app() invokes the Express module.
//  3.  app.listen(): this is the same as server.listen(), as convention has it
//      in NodeJS.
//  4.  Created our own very simple router using:
//      a) app.get(), app.post(), app.all(), etc.
//  5. Served  up  static files with express.static() middleware.

//  nodeJS 201 Section:
//
//  1. Spoke of middleware. Middleware is any function that has access to request,
//     response,  and next.
//  2. express.json()
//  3. express.urlencoded()
//  4. helmet() --  3rd party module
//  5. req.ip -- contains the address of the requester.
//  6. req.path -- contains the required path
//  7. req.body -- all parsed data will be put into this property.
