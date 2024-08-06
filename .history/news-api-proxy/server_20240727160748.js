const express = require("express");
const fetch = require("node-fetch");
const app = express();
const port = 3000; // Change the port number here

app.use(express.json());

app.get("/api/news", async (req, res) => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=${process.env.NEWS_API_KEY}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch news from News API");
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ message: "Error fetching news" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
