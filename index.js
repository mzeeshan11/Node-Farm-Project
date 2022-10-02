const fs = require('fs')
// Calling this function here with this build in FS module name ...
// will then return an object in which there are a lot of functions that we can use.

// We can do many amazing things with Node.JS that we cannot do with JavaScript in the browser. 
// For example reading the file from the file system

// In order to do that we need to use a node module. So Node.js is really build around this concept of modules ...
// where all kind of additional functionality are stored in a module. In our above case, reading files, that is inside the FS module

// Use of FS module
// In order to use FS module, we do require them into our code and then store the result of the requiring function in a variable

// Take two parameter
// First one is the path to the file that we're reading and then also character encode 
// Second one we have to define the character encoding, which is utf8

const textIn = fs.readFileSync('./txt/input.txt', 'utf-8')
console.log(textIn)

// Writing text in a file
const textOut = `This is what we Know about the avocado: ${textIn}.\nCreated on ${Date.now()}`
fs.writeFileSync("./txt/output.txt", textOut)

console.log("File Written!")