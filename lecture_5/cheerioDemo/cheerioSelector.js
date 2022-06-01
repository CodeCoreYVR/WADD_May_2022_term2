// First: we have to require the 'cheerio' module 
const cheerio = require('cheerio')

// This will load html from string 
const $ = cheerio.load(`
<a id='linkToGoogle' href='https://google.com'>Go to google</a>
<p class='content'>This is my first paragraph - text</p>
<p class='content'>This is my second paragraph</p>
`)

// Then we can use selectors and jQuery like api on $
// For example this will select element with id 'linkToGoogle' and it will
// extract value from href attribute

const link = $('#linkToGoogle').attr('href')

console.log(link)

// We in jquery we use `.` to grab classes e.g. `.content` to grab the paragraph which has class 'content'
// const paragraphContent = $('.content').text()

// console.log(paragraphContent)

// Grabing all the tags with class '.content'

const allParagraphsWithContent = $('.content')
// We can loop over an list of elements 
allParagraphsWithContent.each((index, element)=>{
  // but for each element we have to create a new $() selector
  let pTag = $(element);
  // then we can use same function like .text() 
  console.log(`${index} | ${pTag.text()}`)
})