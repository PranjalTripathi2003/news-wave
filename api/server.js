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
if(process.env.STATE === "PRODUCTION"){
  console.log(process.env.NEWS_API_KEY); // Verify that the NEWS_API_KEY is being read correctly

}

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Serve static files from the React build
app.use(express.static(path.join(__dirname, "../dist")));

// Use the CORS middlewarev
app.use(cors());

app.get("/api/news", async (req, res) => {
  try {
    const { category = "general" } = req.query;
    console.log("Fetching news for category:", category);

    const apiKey = process.env.NEWS_API_KEY;
    if (!apiKey) {
      throw new Error("NEWS_API_KEY environment variable is not set");
    }

    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`
    );

    if (!response.ok) {
      throw new Error(`News API responded with status: ${response.status}`);
    }

    const data = await response.json();
    console.log(`Fetched ${data.articles?.length || 0} articles`);
    res.json(data);
  } catch (error) {
    console.error("Server error:", error.message);
    res.status(500).json({
      message: "Error fetching news",
      error: error.message,
    });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
