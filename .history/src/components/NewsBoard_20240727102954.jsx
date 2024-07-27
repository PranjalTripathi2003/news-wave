import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import "../styles/NewsBoard.css";

const NewsBoard = ({ category, darkMode }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}`;

    // Fetch with headers
    fetch(url, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setArticles(data.articles || []); // Fallback to an empty array if articles is undefined
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetching error: ", error);
        setLoading(false);
      });
  }, [category]);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <h2 className="text-center header-margin">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {loading ? (
        <Spinner />
      ) : (
        articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
            darkMode={darkMode} // Pass dark mode state
          />
        ))
      )}
    </div>
  );
};

export default NewsBoard;
