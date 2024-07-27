import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import "../styles/NewsBoard.css"; // Adjust the path as necessary

const NewsBoard = ({ category, darkMode }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=YOUR_API_KEY`
      );
      const data = await response.json();
      setArticles(data.articles);
    };

    ```
fetchNews();

```;
  }, [category]);

  return (
    <div className={`news-board ${darkMode ? "dark-mode" : "light-mode"}`}>
      {articles.map((article, index) => (
        <NewsItem
          key={index}
          title={article.title}
          description={article.description}
          src={article.urlToImage}
          url={article.url}
          darkMode={darkMode}
        />
      ))}
    </div>
  );
};

export default NewsBoard;
