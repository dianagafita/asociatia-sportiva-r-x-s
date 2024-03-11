import React, { useState } from "react";
import axios from "axios";
import Header from "../../Dashboard/Header";
import { Box } from "@mui/material";
import "./AddFutureGames.css";
import Preview from "./Preview/Preview";

const initialData = {
  name: "",
  group: "",
  team1Name: "",
  team1Logo: null,
  team2Name: "",
  team2Logo: null,
  time: "",
  place: "",
};

const AddGameForm = () => {
  const [formData, setFormData] = useState(initialData);
  const [openPreviw, setOpenPreviw] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      await axios.post("/api/futureGames/addGame", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setFormData(initialData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // const handlePreviwModal = () => {
  //   setOpenPreviw((prev) => !prev);
  // };

  return (
    <>
      {/* {openPreviw && (
        <Preview
          className="backdrop-preview"
          formData={formData}
          onClick={() => {
            setOpenPreviw(false);
          }}
        />
      )} */}
      <div className="fit-contents">
        <Box p="20px" backgroundColor="var(--main-color)">
          <Header
            title="ADD FUTURE GAME"
            subtitle="Fill the form to add future games."
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
              value={formData.name}
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
              value={formData.group}
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
              value={formData.team1Name}
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
              value={formData.team2Name}
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
              value={formData.time}
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
              value={formData.place}
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
            {formData.team1Logo && (
              <img
                src={URL.createObjectURL(formData.team1Logo)}
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
            {formData.team2Logo && (
              <img
                src={URL.createObjectURL(formData.team2Logo)}
                alt="Team 2 Logo Preview"
                className="logo-preview"
              />
            )}
          </div>
          <div className="actions">
            <button type="submit">Submit</button>
            {/* <button type="button" onClick={handlePreviwModal}>
              Preview
            </button> */}
          </div>
        </form>
      </div>
    </>
  );
};

export default AddGameForm;
