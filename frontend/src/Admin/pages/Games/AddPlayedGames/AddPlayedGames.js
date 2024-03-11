import React, { useState } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import "./AddPlayedGames.css";
import Header from "../../../Dashboard/Header";
import { useNavigate } from "react-router";

const initialData = {
  name: "",
  group: "",
  date: "",
  headerPhoto: null,
  details: "",
  gamePhotos: [],
};

export default function AddPlayedGames() {
  const [formData, setFormData] = useState(initialData);
  const navigate = useNavigate();
  const handleChanges = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChanges = (e) => {
    if (e.target.name === "headerPhoto") {
      setFormData({ ...formData, headerPhoto: e.target.files[0] });
    } else if (e.target.name === "gamePhotos") {
      setFormData({ ...formData, gamePhotos: e.target.files });
    }
  };

  const handleSubmits = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    formDataToSend.append("name", formData.name);
    formDataToSend.append("group", formData.group.toUpperCase());
    formDataToSend.append("date", formData.date);
    formDataToSend.append("details", formData.details);

    formDataToSend.append("headerPhoto", formData.headerPhoto);

    for (let i = 0; i < formData.gamePhotos.length; i++) {
      formDataToSend.append("gamePhotos", formData.gamePhotos[i]);
    }

    try {
      console.log(formDataToSend);
      await axios.post("/api/pastGames/addPastGame", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setFormData(initialData);
      // navigate("/past-games");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div className="fit-contents">
        <Box p="20px" backgroundColor="var(--main-color)">
          <Header
            title="ADD PLAYED GAME"
            subtitle="Fill the form to add a played game."
          />
        </Box>
        <form onSubmit={handleSubmits} className="form-games-container">
          <div className="form-games-name">
            <label>
              <p>Name:</p>
            </label>
            <input type="text" name="name" onChange={handleChanges} required />
          </div>
          <div className="form-games-group">
            <label>
              <p>Group:</p>
            </label>
            <input type="text" name="group" onChange={handleChanges} required />
          </div>
          <div className="form-games-name1">
            <label>
              <p>Date:</p>
            </label>
            <input type="date" name="date" onChange={handleChanges} required />
          </div>
          <div className="form-games-name2">
            <label>
              <p>Details:</p>
            </label>
            <textarea
              type="text"
              name="details"
              onChange={handleChanges}
              required
              rows={4}
            />
          </div>

          <div className="form-games-logo1">
            <label>
              <p>Main Photo:</p>
            </label>
            <input
              type="file"
              name="headerPhoto"
              onChange={handleImageChanges}
              required
            />
            {formData.headerPhoto && (
              <img
                src={URL.createObjectURL(formData.headerPhoto)}
                alt=""
                className="logo-preview"
              />
            )}
          </div>
          <div className="form-games-logo2">
            <label>
              <p>Game Photos:</p>
            </label>
            <input
              multiple
              type="file"
              name="gamePhotos"
              onChange={handleImageChanges}
              required
            />
            <div className="form-games-photos">
              {Array.from(formData.gamePhotos).map((file, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(file)}
                  alt=""
                  className="logo-preview"
                />
              ))}
            </div>
          </div>
          <div className="actions">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
