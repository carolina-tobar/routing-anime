import React from "react";
import "./Card.css";

const Card = ({ anime }) => {
  return (
    <div className="card">
      <h1 className="card-title">{anime.attributes.titles.en}</h1>
      <img
        className="image"
        src={anime.attributes.posterImage.original}
        alt=""
        srcset=""
      />
      <p className="info">
        Episodes:<span>{anime.attributes.episodeCount}</span>
      </p>
      <p className="info">Age Rating:{anime.attributes.ageRating}</p>
    </div>
  );
};

export default Card;
