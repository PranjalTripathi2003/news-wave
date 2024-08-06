// server.js
require("dotenv").config();

const express = require("express");
const fetch = require("node-fetch");
const app = express();
const port = process.env.PORT || 5000;

// Environment variable for API key
const NEWS_API_KEY =
  process.env.NEWS_API_KEY || "089cdc630c9345e28ca94608bec5a1c6";
const NEWS_API_URL = "https://newsapi.org/v2/top-headlines";

app.use(express.json());

app.get("/news", async (req, res) => {
  const { category } = req.query;
  try {
    const response = await fetch(
      `${NEWS_API_URL}?country=in&category=${category}&apiKey=${NEWS_API_KEY}`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

app.listen(port, () => {
  console.log(`Proxy server running on http://localhost:${port}`);
});
