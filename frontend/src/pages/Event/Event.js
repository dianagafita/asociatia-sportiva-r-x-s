import React, { useEffect, useState } from "react";
import "./Event.css";
import { useParams } from "react-router";
import axios from "axios";
import NoEvents from "../../components/NoEvents/NoEvents";

export default function Event() {
  const [games, setGames] = useState([]);
  const { title } = useParams();

  useEffect(() => {
    const fetchGame = async () => {
      const fetchedGames = await axios.get(
        `/api/pastGames/allPastGames/${title}`
      );
      const sortedGames = fetchedGames.data.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        // Check if dates are equal
        if (dateA.getTime() === dateB.getTime()) {
          // If dates are equal, use the original order of events
          return fetchedGames.data.indexOf(b) - fetchedGames.data.indexOf(a);
        }

        // Otherwise, sort by date
        return dateB - dateA;
      });

      setGames(sortedGames);
    };
    fetchGame();
  }, [title]);

  return (
    <section id="event-page">
      <span className="events-container-title">{title}</span>
      {games.length === 0 && <NoEvents />}
      {/* <div className="events-container">
        {games.map((event) => (
          <div className="event-container-wrapper" key={event.id}>
            <div className="event-container">
              {event.headerPhoto && (
                <img
                  src={`http://localhost:5001/pastGames/${event.headerPhoto.imageName}`}
                  alt=""
                />
              )}
              <div className="event-details">
                <div className="details">
                  <h3>{event.name}</h3>
                  <p>{event.details}</p>
                  <h1>{event.date}</h1>
                </div>
                <a
                  href={`/evenimente/${title}/${event.id}`}
                  className="event-more-info"
                >
                  DETALII &nbsp; &nbsp;
                </a>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </section>
  );
}
