import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url"; // Import this to handle ES module path resolution

// Simulate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, "../.env") });

console.log(process.env.NEWS_API_KEY); // Verify that the NEWS_API_KEY is being read correctly

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Use the CORS middleware
app.use(cors());

app.get("/api/news", async (req, res) => {
  try {
    console.log("Fetching news from News API...");
    const apiKey = process.env.NEWS_API_KEY;
    if (!apiKey) {
      throw new Error("NEWS_API_KEY environment variable is not set");
    }
    console.log("Using API Key:", apiKey); // Log the API key to verify it's being read correctly
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=${apiKey}`
    );
    if (!response.ok) {
      throw new Error(
        `Failed to fetch news from News API: ${response.statusText}`
      );
    }
    const data = await response.json();
    console.log("Fetched data:", data);
    res.json(data);
  } catch (error) {
    console.error("Error fetching news:", error);
    res
      .status(500)
      .json({ message: "Error fetching news", error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
