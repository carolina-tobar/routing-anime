import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";

const Anime = () => {
  const [anime, setAnime] = useState(null);
  useEffect(() => {
    axios
      .get("https://kitsu.io/api/edge/anime")
      .then((response) => {
        setAnime(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="card-container">
      {anime &&
        anime.map((item) => {
          return <Card anime={item} />;
        })}
    </div>
  );
};

export default Anime;
