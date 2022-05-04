require("dotenv").config();
const axios = require("axios");

const express = require("express");
const app = express();
app.use(express.json());

const SCRAPER_API_KEY = process.env.SCRAPER_API_KEY;
const SCRAPINGBEE_API_KEY = process.env.SCRAPINGBEE_API_KEY;
const ZENSCRAPE_API_KEY = process.env.ZENSCRAPE_API_KEY;

app.get("/", (req, res) => {
  const { target, url } = req.query;

  let apiKey;

  if (target === "scraperapi") {
    apiKey = SCRAPER_API_KEY;

    console.log("target service: ", target, " target Api Key: ", apiKey);

    axios
      .get(`http://api.scraperapi.com?api_key=${apiKey}&url=${url}`)
      .then(function (response) {
        // handle success

        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  } else if (target === "scrapingbee") {
    apiKey = SCRAPINGBEE_API_KEY;

    console.log("target service: ", target, " target Api Key: ", apiKey);

    axios
      .get(`https://app.scrapingbee.com/api/v1/?api_key=${apiKey}&url=${url}`)
      .then(function (response) {
        // handle success
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  } else if (target === "zenscrape") {
    apiKey = ZENSCRAPE_API_KEY;

    console.log("target service: ", target, " target Api Key: ", apiKey);

    axios
      .get(`https://app.zenscrape.com/api/v1/get?api_key=${apiKey}&url=${url}`)
      .then(function (response) {
        // handle success
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}..`));

// url = "http://myapi.com/?target=scraperapi&url=http://httpbin.org/ip";
