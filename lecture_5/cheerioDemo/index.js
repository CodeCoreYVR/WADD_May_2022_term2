// https://github.com/cheeriojs/cheerio
const cheerio = require('cheerio') //Step 1. requiring cheerios to project 

// Step 2: passing an html string to the .load() method which returns cheerios instanca
const $ = cheerio.load("<p class='content'>This is some paragraph content</p>")

// console.log($('p.content')) // Here we check a cheerio object


// Below we use jquery like API to read the parts of HTML string 
console.log($('p.content').text()) // -> This is some paragraph content

