import puppeteer from "puppeteer";
import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import cors from "cors";
import { MongoClient, ServerApiVersion } from "mongodb";

const app = express();
const PORT = 4000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//mongodb
const uri =
  "mongodb+srv://winstonzhu:a12QNn9toY5I59dB@feedback.qa82eyz.mongodb.net/?retryWrites=true&w=majority&appName=FeedBack";

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
    const remind = document.querySelector(".wp-block-group__inner-container");

    // Fetch the sub-elements from the previously fetched quote element
    // Get the displayed text and return it (`.innerText`)
    const image2 = remind.querySelector(".wp-image-22290").getAttribute("src");
    const blurb = remind.querySelector(".has-white-color").innerText;

    return { image2, blurb };
  });

  // Display the quotes
  //console.log(quotes);
  // Close the browser
  await browser.close();

  return quotes2;
};

//run mongodb client
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function findMovie() {
  // Get the database and collection on which to run the operation
  const database = client.db("sample_mflix");
  const movies = database.collection("movies");
  // Query for a movie that has the title 'The Room'
  const query = { title: "The Room" };
  const options = {
    // Sort matched documents in descending order by rating
    sort: { "imdb.rating": -1 },
    // Include only the `title` and `imdb` fields in the returned document
    projection: { _id: 0, title: 1, imdb: 1 },
  };
  // Execute query
  const movie = await movies.findOne(query, options);
  // Print the document returned by findOne()
  console.log(movie);
}

async function runDB() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    await findMovie();
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
runDB().catch(console.dir);

// Start the scraping
app.listen(PORT, function (err) {
  if (err) console.error(err);
  console.log("Server listening on PORT", PORT);
});
