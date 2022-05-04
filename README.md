# Api Router

## Run App
- Clone the repo.
- Install dependencies `npm install`
- run command `npm run dev`

development server should start at `http://localhost:8080/`

## How to use the services

- To use Scraper Api go to this url - `http://localhost:8080/?target=scraperapi&url=http://httpbin.org/ip`

- To use Scraping bee Api go to this url - `http://localhost:8080/?target=scrapingbee&url=http://httpbin.org/ip`

- To use Zenscrape Api go to this url - `http://localhost:8080/?target=zenscrape&url=http://httpbin.org/ip`

## Problem
Unfortunately I am having some difficulty with Zenscrape api key. I am getting this error - `data: { error: 'No apikey provided.' }`