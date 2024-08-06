import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import "../styles/NewsBoard.css";

const NewsBoard = ({ category, darkMode }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch("http://localhost:3000/api/news")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched articles:", data.articles); // Debugging log
        if (data.articles) {
          setArticles(data.articles);
        } else {
          console.error("No articles found in the response");
          setError("No articles found in the response");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
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
