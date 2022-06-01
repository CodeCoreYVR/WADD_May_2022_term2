// This will import axios in this script used to load html from link
import axios from 'axios'
// This will import cheerio module - used for extracting information from html - jst like jquery
import cheerio from 'cheerio'
import chalk from 'chalk'
import cowsay from 'cowsay'

const main = async () =>{ // As we know axios return promise therefore we are using async and await
  // First we download the html of axios website
  let response = await axios.get('https://axios-http.com/docs/intro')
  // console.log(response.data)

  //then we will create instance of cheerio and load html
  const $ = cheerio.load(response.data)

  // we will use selector for id: 'features' and we will select element
  // as we know feature list is after 'Feature' heading so we will use next to select
  // <ul>...</ul>
  // Example:
  // <h3 id='features'> </h3> --- We dont care about <h3> tag
  // <ul>
  //    <li> <li>
  // </ul>

  const featureList = $('#features').next()

  featureList.children().each((index, element)=>{
    // We have to create new variable and use the cheerio selector again
    // And we can just pass the element from our each function
    let currentElement = $(element)
    console.log(
          // then we will just display each feature with cowsay

      cowsay.say({
      text: chalk.yellow(currentElement.text())
    })
    )
  })

} 
// if we get an error we will console.error it
main().catch(err => console.error(err))