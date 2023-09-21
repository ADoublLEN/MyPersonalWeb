import React from "react";
import "./ContentCard.css";
import { Link } from "react-router-dom";

function ContentCard({
  title,
  content,
  imageUrl,
  linkTo,
  imageWidth,
  imageHeight
}) {
  const imageStyle = {
    width: imageWidth || "100%", // 使用默认值，如果没有提供imageWidth
    height: imageHeight || "auto" // 使用默认值，如果没有提供imageHeight
  };

  return (
    <div className="content-card">
      <h2>{title}</h2>
      <p>{content}</p>
      <img src={imageUrl} alt={title} style={imageStyle} />
      <Link to={linkTo}>
        <button>Learn More</button>
      </Link>
    </div>
  );
}

export default ContentCard;
