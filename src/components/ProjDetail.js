import React from "react";
import "./ProjDetail.css";

function ProjDetail({ title, content, imageUrl, marginTop, imageStyle }) {
  const containerStyle = {
    marginTop: marginTop || "180px"
  };

  return (
    <div className="proj-detail" style={containerStyle}>
      <h2>{title}</h2>
      <div>{content}</div>
      {imageUrl && <img src={imageUrl} alt={title} style={imageStyle} />}
    </div>
  );
}

export default ProjDetail;
