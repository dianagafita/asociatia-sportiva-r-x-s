import React from "react";
import "./Events.css";
import img1 from "../../assets/homePage/2.jpg";
import relaxare from "../../assets/events/relaxare.jpg";
import caritate from "../../assets/events/caritate.jpg";
import craciun from "../../assets/events/craciun.jpg";
import { IoIosArrowForward } from "react-icons/io";

const DUMMMY_GR = [
  { id: 1, title: "GRUPA U6", img: `url(${img1}` },
  { id: 2, title: "GRUPA U7", img: `url(${img1}` },
  { id: 3, title: "GRUPA U8", img: `url(${img1}` },
  { id: 4, title: "GRUPA U9", img: `url(${img1}` },
  { id: 5, title: "GRUPA U10", img: `url(${img1}` },
  { id: 6, title: "GRUPA U11", img: `url(${img1}` },
  { id: 7, title: "GRUPA U12", img: `url(${img1}` },
  { id: 8, title: "GRUPA U13", img: `url(${img1}` },
  { id: 9, title: "GRUPA U14", img: `url(${img1}` },
  { id: 10, title: "GRUPA U15", img: `url(${img1}` },
];

const DUMMMY_EV = [
  { id: 1, title: "CRACIUN", img: `url(${craciun}` },
  { id: 2, title: "CARITATE", img: `url(${caritate}` },
  { id: 3, title: "RELAXARE", img: `url(${relaxare}` },
];

export default function Events() {
  return (
    <div id="events-page">
      <section id="games-section">
        <div className="event-group-container">
          <span className="events-title mec">
            <span>M</span>
            <span>ECIURI</span>
          </span>
          {DUMMMY_GR.map((group) => (
            <div
              key={group.id}
              className="group-container"
              style={{
                backgroundImage: group.img,
              }}
            >
              <h3>{group.title} </h3>
              <a href={`/evenimente/${group.title}`}>
                Vezi meciuri
                <span className="h">
                  <IoIosArrowForward style={{ verticalAlign: "middle" }} />
                </span>
              </a>{" "}
            </div>
          ))}
        </div>
      </section>
      <section id="fun-events-section">
        <div className="event-group-container fun">
          <span className="events-title rec">
            <span>E</span>
            <span>VENIMENTE </span>
            <span className="s">S</span>
            <span>PECIALE</span>
          </span>
          {DUMMMY_EV.map((group) => (
            <div
              key={group.id}
              className="group-container"
              style={{ backgroundImage: group.img }}
            >
              <h3>{group.title} </h3>{" "}
              <a href={`/evenimente/${group.title}`}>
                Vezi detalii
                <span>
                  <IoIosArrowForward />
                </span>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
