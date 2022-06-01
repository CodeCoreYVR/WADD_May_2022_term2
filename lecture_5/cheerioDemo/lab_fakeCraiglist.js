// Go to Vancouver's Craiglist page and extract the HTML code from the article.

// Get the href attribute of the first link on the page.
// Change the text for all links on the page to be something generated by faker (except the calendar).
// Make all links go to http://www.codecore.ca.
// Make all of the text use the Papyrus font.
// After you're finished, write the markup to an HTML file and use cowsay to log to the console if it's successful.

import axios from 'axios'
// This will import cheerio module - used for extracting information from html - jst like jquery
import cheerio from 'cheerio'
import fs from 'fs/promises'
import cowsay from "cowsay";

import {faker} from '@faker-js/faker'

const main = async () => {
  const response = await axios.get("https://vancouver.craigslist.org/");

  // Creates new instance of cheerio from response
  const $ = cheerio.load(response.data);

  // Get all links but not links inside of div with class .cal
  let links = $("a :not(.cal)");
  // Loops over links list
  links.each((index, element) => {
    //Generates random first name
    let random = faker.name.firstName();

    //overrides text of a link
    $(element).text(random);
  });

  // Selects all links
  links = $("a");
  // loops over links
  links.each((index, element) => {
    // Updates href attribute of link
    $(element).attr("href", "http://www.codecore.ca");
  });

  // Changes font to papyrus
  $("html *").css("font-family", "Papyrus,fantasy");

  // Write result to file
  await fs.writeFile("fakeCraigslist.html", $.html());

  // create new console log with nice ascii art cow
  console.log(cowsay.think({ text: "File created successfully" }));
};

main().catch((err) => console.error(err));