const fs = require('fs')


/////////////////////////////////////////////////
//// Reading and Writing Files Asynchronously///
///////////////////////////////////////////////

// Non-Blocking, Async Way

// First Parameter is path of the file
// Second parameter is a callback function (Node.JS is all built arounds callbacks in order to implement an async behavior)
// fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
//     console.log(data)
// })
fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
    if (err) return console.log("ERROR!")
    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2)
        fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
            console.log(data3)
            fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
                console.log("Your file has been written")
            })
        })
    })
})

console.log('Will Read File!')