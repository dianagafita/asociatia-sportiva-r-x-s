// import React, { useEffect, useReducer, useState } from "react";
// import "./FutureGames.css";
// import logoo from "../../logo.jpg";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import { getAllGames } from "../../services/gamesService";

// export const responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
//     breakpoint: { max: 4000, min: 3000 },
//     items: 5,
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 640 },
//     items: 2,
//   },
//   mobile: {
//     breakpoint: { max: 640, min: 0 },
//     items: 1,
//   },
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "GAMES_LOADED":
//       return { ...state, games: action.payload };
//     default:
//       return state;
//   }
// };

// const initialState = { games: [] };

// export default function FutureGames() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const { games } = state;

//   useEffect(() => {
//     let games = getAllGames();
//     games.then((game) => dispatch({ type: "GAMES_LOADED", payload: game }));
//   }, []);
//   console.log("b", games);

//   return (
//     <div className="games">
//       <div className="future-games-container">
//         <Carousel
//           responsive={responsive}
//           arrows={false}
//           showDots={true}
//           swipeable
//         >
//           {games.map((game) => {
//             console.log(game.team1Logo);
//             console.log(game.team2Logo);

//             return (
//               <div className="future-game-container" key={game.id}>
//                 <span className="date">
//                   <div>{game.name}</div>
//                   <div>{game.group}</div>
//                 </span>
//                 <div className="image-logo">
//                   <img
//                     src={`data:image/jpeg;base64,${game.team1Logo}`}
//                     className="team1-logo"
//                     alt="Team 1 Logo"
//                   />
//                 </div>
//                 <div className="image-logo">
//                   <img
//                     src={`data:image/jpeg;base64,${game.team2Logo}`}
//                     className="team2-logo"
//                     alt="Team 2 Logo"
//                   />
//                 </div>
//                 <span className="team1-name">{game.team1Name}</span>
//                 <span className="vs"> vs </span>
//                 <span className="team2-name">{game.team2Name}</span>
//                 <span className="time">{game.time}</span>
//                 <span className="place">{game.place}</span>
//               </div>
//             );
//           })}
//         </Carousel>
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./FutureGames.css";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
  mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
};

const FutureGames = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get("/api/futureGames/allGames");
        setGames(response.data);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };
    fetchGames();
  }, []);

  return (
    <div className="games">
      <div className="future-games-container">
        {/* <Carousel
          responsive={responsive}
          arrows={false}
          showDots={true}
          swipeable
        > */}
        {games.map((game) => (
          <div className="future-game-container" key={game._id}>
            <span className="date">
              <div>{game.name}</div>
              <div>{game.group}</div>
            </span>
            <div className="image-logo">
              {game.team1Logo && (
                <img
                  src={`http://localhost:5001/games/${game.team1Logo.imageName}`}
                  className="team1-logo"
                  alt="Team 1 Logo"
                />
              )}
            </div>
            <div className="image-logo">
              {game.team2Logo && (
                <img
                  src={`http://localhost:5001/games/${game.team2Logo.imageName}`}
                  className="team2-logo"
                  alt="Team 2 Logo"
                />
              )}
            </div>
            <span className="team1-name">{game.team1Name}</span>
            <span className="vs">vs</span>
            <span className="team2-name">{game.team2Name}</span>
            <span className="time">{game.time}</span>
            <span className="place">{game.place}</span>
          </div>
        ))}
        {/* </Carousel> */}
      </div>
    </div>
  );
};

export default FutureGames;
