import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import "../styles/NewsBoard.css";

const NewsBoard = ({ category, darkMode }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL =
    process.env.NODE_ENV === "production"
      ? "/api/news"
      : "http://localhost:3000/api/news";

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`${API_URL}?category=${category}`);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            errorData.message || `HTTP error! status: ${response.status}`
          );
        }

        const data = await response.json();
        if (!data.articles?.length) {
          throw new Error("No articles found for this category");
        }

        setArticles(data.articles);
      } catch (error) {
        console.error("Error:", error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <h2 className="text-center header-margin">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {loading ? (
        <Spinner />
      ) : error ? (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      ) : (
        articles.map((news, index) => {
          return (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
              darkMode={darkMode} // Pass dark mode state
            />
          );
        })
      )}
    </div>
  );
};

export default NewsBoard;
