import React from "react";
import "./Preview.css";

export default function Preview({ formData, ...props }) {
  const team1LogoURL = formData.team1Logo
    ? URL.createObjectURL(formData.team1Logo)
    : null;
  const team2LogoURL = formData.team2Logo
    ? URL.createObjectURL(formData.team2Logo)
    : null;

  return (
    <div className="preview-container">
      <div className="backdrop-preview" {...props}></div>
      <div className="preview-game-container">
        <div>Name: {formData.name}</div>
        <div>Group: {formData.group}</div>
        <div>Team 1 Name: {formData.team1Name}</div>
        <div>Team 2 Name: {formData.team2Name}</div>
        {team1LogoURL && (
          <div className="preview-image">
            Team 1 Logo: <img src={team1LogoURL} alt="Team 1 Logo" />
          </div>
        )}
        <div>Team 2 Name: {formData.team2Name}</div>
        {team2LogoURL && (
          <div className="preview-image">
            Team 2 Logo: <img src={team2LogoURL} alt="Team 2 Logo" />
          </div>
        )}
        <div>Time: {formData.time}</div>
        <div>Place: {formData.place}</div>
      </div>
    </div>
  );
}
