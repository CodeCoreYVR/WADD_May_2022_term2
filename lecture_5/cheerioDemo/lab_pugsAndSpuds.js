import axios from 'axios'
// This will import cheerio module - used for extracting information from html - jst like jquery
import cheerio from 'cheerio'
import fs from 'fs/promises'


const main = async () =>{
  const response = await axios.get('https://en.wikipedia.org/wiki/Pug')

  const $ = cheerio.load(response.data)

  let fileText = ''

  fileText = '# Team name \n'

  let listofH2= $('#content h2')

  listofH2.each((index,element) => {
   let h2 =$(element)
   fileText += `## ${h2.text()}  \n`
   fileText += `${h2.next().text()} \n`
  })

  let listofH3= $('#content h3')
  listofH3.each((index,element) => {
    let h3 =$(element)
    fileText += `### ${h3.text()}  \n`
    fileText += `${h3.next().text()} \n`
   })

   await fs.writeFile('pugs.md', fileText)
}

main().catch(err => console.error(err))