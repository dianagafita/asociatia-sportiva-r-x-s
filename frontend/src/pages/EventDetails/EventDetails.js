import React, { useEffect, useState } from "react";
import "./EventDetails.css";
import { useParams } from "react-router";
import axios from "axios";

export default function EventDetails() {
  const { id } = useParams();
  const [nrOfImages, setNrOfImages] = useState(0);

  const [game, setGame] = useState({
    name: "",
    details: "",
    gamePhotos: [],
  });

  useEffect(() => {
    const getGame = async () => {
      const loadedGame = await axios.get(`/api/pastGames/${id}`);
      const gamePhotos = loadedGame.data.gamePhotos;

      setGame(loadedGame.data);
      setNrOfImages(gamePhotos.length);
    };
    getGame();
  }, [id, nrOfImages]);
  const gridTemplateColumns = `repeat(${nrOfImages}, minmax(380px, 1fr))`;

  return (
    <section id="event-detail-page">
      <div className="event-detail-container">
        <div className="event-details-container">
          <h3>{game.name}</h3>
          <p>{game.details}</p>
        </div>
        <div className="event-images-container" style={{ gridTemplateColumns }}>
          {game.gamePhotos.map((photo, index) => (
            <div
              key={index}
              className="images"
              style={{
                backgroundImage: `url(http://localhost:5001/${photo.imagePath})`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
