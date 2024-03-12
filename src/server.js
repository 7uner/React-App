import puppeteer from "puppeteer";
import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import cors from "cors";

const app = express();
const PORT = 4000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware that parses json and looks at requests where the Content-Type header matches the type option.
app.use(express.json());
app.use(cors());

// All remaining requests return the React app, so it can handle routing.
app.get("/scrapeNews", async (_req, res) => {
  //res.setHeader("Content-Type", "application/json");
  let test = await getQuotes();
  res.json(test);
});

// All remaining requests return the React app, so it can handle routing.
app.get("/scrapeDonation", async (_req, res) => {
  //res.setHeader("Content-Type", "application/json");
  let test = await getDonation();
  res.json(test);
});

const getQuotes = async () => {
  // Start a Puppeteer session with:
  // - a visible browser (`headless: false` - easier to debug because you'll see the browser in action)
  // - no default viewport (`defaultViewport: null` - website page will in full width and height)
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });

  // Open a new page
  const page = await browser.newPage();

  // On this new page:
  // - open the "http://quotes.toscrape.com/" website
  // - wait until the dom content is loaded (HTML is ready)
  await page.goto("https://www.shn.ca/", {
    waitUntil: "domcontentloaded",
  });

  // Get page data
  const quotes = await page.evaluate(() => {
    // Fetch the first element with class "quote"
    const newsList = document.querySelectorAll(".post");

    // Fetch the sub-elements from the previously fetched quote element
    // Get the displayed text and return it (`.innerText`)
    return Array.from(newsList).map((news) => {
      const title = news.querySelector(".title").innerText;
      const date = news.querySelector(".date").innerText;
      const link = news.querySelector(".link").getAttribute("href");
      const image = news.querySelector(".sr-only").getAttribute("src");
      return { title, date, image, link };
    });
  });

  // Display the quotes
  //console.log(quotes);
  // Close the browser
  await browser.close();

  return quotes;
};

const getDonation = async () => {
  // Start a Puppeteer session with:
  // - a visible browser (`headless: false` - easier to debug because you'll see the browser in action)
  // - no default viewport (`defaultViewport: null` - website page will in full width and height)
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });

  // Open a new page
  const page = await browser.newPage();

  // On this new page:
  // - open the "http://quotes.toscrape.com/" website
  // - wait until the dom content is loaded (HTML is ready)
  await page.goto("https://www.shn.ca/careers-volunteering/", {
    waitUntil: "domcontentloaded",
  });

  // Get page data
  const quotes2 = await page.evaluate(() => {
    // Fetch the first element with class "quote"
    const remind = document.querySelector(
      ".wp-block-group__inner-container"
    );

  // Fetch the sub-elements from the previously fetched quote element
  // Get the displayed text and return it (`.innerText`)
    const image2 = remind.querySelector(".wp-image-22290").getAttribute("src");
    const blurb = remind.querySelector(".has-white-color").innerText;

    return { image2,blurb};
    
  });
    
  // Display the quotes
  //console.log(quotes);
  // Close the browser
  await browser.close();

  return quotes2;
};

// Start the scraping
app.listen(PORT, function (err) {
  if (err) console.error(err);
  console.log("Server listening on PORT", PORT);
});
