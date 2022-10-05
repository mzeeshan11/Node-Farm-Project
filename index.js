const fs = require('fs')
const http = require('http')
const url = require('url')


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
// Routing: mean implementing different actions for different URLs.

// fs.readFile("./dev-data/data.json")
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')
const dataObject = JSON.parse(data)

//  First Part: Creating a Sever
const server = http.createServer((req, res) => {
    console.log(req.url)
    const pathName = req.url
    if (pathName === '/' || pathName === '/overview') {
        res.end("This is a Overview")
    } else if (pathName === '/product') {
        res.end("This is a Product Page")
    } else if (pathName === '/api') {
        // Scenario: want to read data from the JSON data file, then parson JSON to JS, and then send back to the client
        res.writeHead(200, { 'Content-type': 'application.json' });
        res.end(dataObject)

    } else {
        // we can send something more in writeHead that's header => to specify header we need an object
        // Header: http header basically piece of information about the response that we are sending back
        res.writeHead(404, {
            'Content-Type': 'text/html',
            'my-own-header': 'hello-world'
        })
        res.end('<h1>Page not Found!</h1>')
        // res.end("Page not Found!")
    }

    // console.log(req)
    // res.end("Hello Client from the Server")
})

// Second Part: Listening incoming request from the client to the Sever
// listen first parameter is port number.
// second 
// third optional parameter which a callback function, callback function run as soon as the server start listening 
server.listen(8000, '127.0.0.1', () => {
    console.log("Listening to request on port 8000");
})