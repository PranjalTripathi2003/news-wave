import React, { useState, useEffect } from 'react';

const NewsBoard = ({ darkMode }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching articles
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      // Simulate an API call
      const response = await fetch('https://api.example.com/news');
      const data = await response.json();
      setArticles(data.articles || []); // Ensure articles is an array
    } catch (error) {
      console.error('Error fetching articles:', error);
      setArticles([]); // Set to empty array on error
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {articles.length === 0 ? (
        <div>No articles available</div>
      ) : (
        articles.map((news, index) => (
          <NewsItem
            key={index}
            url={news.url}
            darkMode={darkMode} // Pass dark mode state
          />
        ))
      )}
    </div>
  );
};

export default NewsBoard;