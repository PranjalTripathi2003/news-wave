import React from "react";
import "../styles/NewsItem.css";
import imageLight from "../assets/news_banner.png";
import imageDark from "../assets/news_banner_dark.png";

const NewsItem = ({ title, description, src, url, darkMode }) => {
  const truncatedTitle =
    title.length > 50 ? title.substring(0, 47) + "..." : title;
  const truncatedDescription =
    description.length > 100
      ? description.substring(0, 97) + "..."
      : description;

  return (
    <div
      className={`card mb-3 d-inline-block my-3 mx-3 px-2 py-2 ${
        darkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
      style={{ maxWidth: "345px" }} // Fixed width and height
    >
      <img
        src={src ? src : darkMode ? imageDark : imageLight}
        className="card-img-top"
        alt={truncatedTitle}
        style={{ height: "200px", objectFit: "cover" }} // Fixed image height
      />
      <div className="card-body">
        <h5 className="card-title">{truncatedTitle}</h5>
        <p className="card-text">{truncatedDescription}</p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;