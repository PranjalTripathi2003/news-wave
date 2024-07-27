import React from "react";

const NewsItem = ({ title = "", description = "", url, src, darkMode, imageDark, imageLight }) => {
  const truncatedTitle = title.split(" ").length > 50 
    ? title.split(" ").slice(0, 50).join(" ") + "..." 
    : title;

  const truncatedDescription = description.length > 100 
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
        alt="..."
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