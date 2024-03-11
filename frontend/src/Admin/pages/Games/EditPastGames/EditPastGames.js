import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import Header from "../../../Dashboard/Header";
import { useNavigate, useParams } from "react-router-dom";
import { ADMIN_URL } from "../../../../secret";

export default function EditPastGame() {
  const [formData, setFormData] = useState({});
  const [game, setGame] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGame = async () => {
      const response = await axios.get(`/api/pastGames/${id}`);
      setGame(response.data);
    };

    fetchGame();
  }, [id]);

  console.log(game);
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

    await axios.put(`/api/pastGames/editPastGame/${id}`, formDataToSend, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  const handleDelete = async (e) => {
    await axios.delete(`/api/pastGames/deletePastGame/${id}`);
    navigate(`/${ADMIN_URL}`);
  };

  return (
    <>
      <div className="fit-contents">
        <Box p="20px" backgroundColor="var(--main-color)">
          <Header
            title="EDIT PAST GAME"
            subtitle="Fill the form to edit past game."
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
              <p>DATE:</p>
            </label>
            <input
              type="date"
              name="date"
              defaultValue={game.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-games-name2">
            <label>
              <p>Details:</p>
            </label>
            <textarea
              name="details"
              defaultValue={game.details}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-games-logo1">
            <label>
              <p>Main Photo:</p>
            </label>
            <input
              type="file"
              name="headerPhoto"
              onChange={handleImageChange}
            />
            {game.headerPhoto && (
              <img
                src={`http://localhost:5001/pastGames/${game.headerPhoto.imageName}`}
                alt="Header Preview"
                className="logo-preview"
              />
            )}
          </div>
          <div className="form-games-logo2">
            <label>
              <p>Game Photos:</p>
            </label>
            <input
              type="file"
              name="gamePhotos"
              onChange={handleImageChange}
              multiple
            />
            {game.gamePhotos &&
              game.gamePhotos.map((photo, index) => (
                <img
                  key={index}
                  src={`http://localhost:5001/pastGames/${photo.imageName}`}
                  alt="Team 2 Logo Preview"
                  className="logo-preview"
                />
              ))}
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
