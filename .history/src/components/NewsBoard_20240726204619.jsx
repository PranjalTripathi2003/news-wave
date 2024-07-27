import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

const NewsBoard = ({ category, darkMode }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    fetch(url).then((response) => {
      response.json().then((data) => {
        setArticles(data.articles);
        setLoading(false);
      });
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
