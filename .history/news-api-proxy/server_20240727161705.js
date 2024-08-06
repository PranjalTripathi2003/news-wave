const express = require("express");
const fetch = require("node-fetch");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/api/news", async (req, res) => {
  try {
    console.log("Fetching data from JSONPlaceholder API...");
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error(
        `Failed to fetch data from JSONPlaceholder API: ${response.statusText}`
      );
    }
    const data = await response.json();
    console.log("Fetched data:", data);
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res
      .status(500)
      .json({ message: "Error fetching data", error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
