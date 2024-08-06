import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import NewsItem from "./NewsItem";

const NewsBoard = ({ darkMode }) => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch data from your local server
    fetch("http://localhost:5000/api/news")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched articles:", data.articles); // Debugging log
        setArticles(data.articles);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
        setLoading(false);
      });
  }, []);

  console.log("Loading state:", loading); // Debugging log
  console.log("Articles:", articles); // Debugging log

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <h2 className="text-center header-margin">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {loading ? (
        <Spinner />
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