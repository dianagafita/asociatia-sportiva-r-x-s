import React, { useEffect, useState } from "react";
import logo from "../../logo.jpg";
import "./Overlay.css";

export default function Overlay() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`container ${visible ? "" : "hide-container"}`}>
      <div className="logo-image">
        <img src={logo} alt="logo" />
      </div>
      <div className="text-container">
        <h1>
          A.S Fotbal R<span>x</span>S
        </h1>
        <span>Gura Humorului, Suceava</span>
      </div>
    </div>
  );
}
