import React from "react";

const NewsItem = ({ title = "", description = "", url, imageUrl }) => {
  const truncatedTitle =
    title.length > 50 ? title.substring(0, 47) + "..." : title;
  const truncatedDescription =
    description.length > 100
      ? description.substring(0, 97) + "..."
      : description;

  return (
    <div className="card">
      <img
        src={imageUrl}
        alt={truncatedTitle}
        className="card-img-top"
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
