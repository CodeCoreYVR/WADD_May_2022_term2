import axios from 'axios'
// This will import cheerio module - used for extracting information from html - jst like jquery
import cheerio from 'cheerio'
import chalk from 'chalk'
import cowsay from 'cowsay'
import fs from 'fs'

const main = async () =>{ // As we know axios return promise therefore we are using async and await
  // First we download the html of axios website
  let response = await axios.get('https://s3.amazonaws.com/codecore/jquery-lab/index.html')
  // console.log(response.data)

  //then we will create instance of cheerio and load html
  const $ = cheerio.load(response.data)
  // The .shape CSS selector selects the element that have the 'shape' class
  const shapes = $('.shape')
  
  // GEt all the list items on the page
  const listItems = $('li')
  // lets find all the href in the links
  let content = 'Name,Link\n'

  listItems.each((index, element)=>{
    const anchor = $(element).find("a[href]")["0"]

    if(anchor){
      const url = $(anchor).attr('href')
      const text = $(anchor).text()
      content += `${text},${url}\n`
    }

    fs.writeFile('links.csv', content , err=>{
      if(err){
        console.log('There was error writing to link.csv', err)
      } else{
        console.log('link.csv file created successfully.')
      }
    })

  })

} 
// if we get an error we will console.error it
main().catch(err => console.error(err))