const http = require('http')


////////////////////////////////////
///////////// Server //////////////
//////////////////////////////////

// In order two build server we have to do two things
// 1-Create Sever
// 2-Start Sever

// Create a server will accept callback function, which will be fired of each time a new request hits our sever.
// callback function get access to important & fundamental variable. It's request and response variable.

// Request Object: which holds all kind of stuff, like the request url, and a bunch of other stuff
// Response Object: Gives us a lot of tools basically for dealing with the response, so for sending out the response 

//  First Part: Creating a Sever
const server = http.createServer((req, res) => {
    // console.log(req)
    res.end("Hello Client from the Server")
})

// Second Part: Listening incoming request from the client to the Sever
// listen first parameter is port number.
// second 
// third optional parameter which a callback function, callback function run as soon as the server start listening 
server.listen(8000, '127.0.0.1', () => {
    console.log("Listening to request on port 8000");
})