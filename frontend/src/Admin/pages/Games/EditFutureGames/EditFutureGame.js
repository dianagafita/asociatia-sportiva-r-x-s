import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import Header from "../../../Dashboard/Header";
import { useNavigate, useParams } from "react-router-dom";

export default function EditFutureGame() {
  const [formData, setFormData] = useState({});
  const [game, setGame] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGame = async () => {
      const response = await axios.get(`/api/futureGames/${id}`);
      setGame(response.data);
    };

    fetchGame();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      setFormData({ ...formData, [e.target.name]: newFile });
    } else {
      setFormData({ ...formData, [e.target.name]: game[e.target.name] });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    await axios.put(`/api/futureGames/editGame/${id}`, formDataToSend, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  const handleDelete = async (e) => {
    await axios.delete(`/api/futureGames/deleteGame/${id}`);
    navigate("/bdjsjs23434dsgbsdbfsvasnalxsgual");
  };
  console.log(game);
  return (
    <>
      <div className="fit-contents">
        <Box p="20px" backgroundColor="var(--main-color)">
          <Header
            title="EDIT FUTURE GAME"
            subtitle="Fill the form to edit future game."
          />
        </Box>
        <form onSubmit={handleSubmit} className="form-games-container">
          <div className="form-games-name">
            <label>
              <p>Name:</p>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={game.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-games-group">
            <label>
              <p>Group:</p>
            </label>
            <input
              type="text"
              name="group"
              defaultValue={game.group}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-games-name1">
            <label>
              <p>Team 1 Name:</p>
            </label>
            <input
              type="text"
              name="team1Name"
              defaultValue={game.team1Name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-games-name2">
            <label>
              <p>Team 2 Name:</p>
            </label>
            <input
              type="text"
              name="team2Name"
              defaultValue={game.team2Name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-games-time">
            <label>
              <p>Time:</p>
            </label>
            <input
              type="text"
              name="time"
              defaultValue={game.time}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-games-place">
            <label>
              <p>Place:</p>
            </label>
            <input
              type="text"
              name="place"
              defaultValue={game.place}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-games-logo1">
            <label>
              <p>Team 1 Logo:</p>
            </label>
            <input
              type="file"
              name="team1Logo"
              onChange={handleImageChange}
              required
            />
            {game.team1Logo && (
              <img
                src={`http://localhost:5001/games/${game.team1Logo.imageName}`}
                alt="Team 1 Logo Preview"
                className="logo-preview"
              />
            )}
          </div>
          <div className="form-games-logo2">
            <label>
              <p>Team 2 Logo:</p>
            </label>
            <input
              type="file"
              name="team2Logo"
              onChange={handleImageChange}
              required
            />
            {game.team2Logo && (
              <img
                src={`http://localhost:5001/games/${game.team2Logo.imageName}`}
                alt="Team 2 Logo Preview"
                className="logo-preview"
              />
            )}
          </div>
          <div className="actions">
            <button type="submit">Edit</button>
            <button onClick={handleDelete} type="button">
              Delete
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
