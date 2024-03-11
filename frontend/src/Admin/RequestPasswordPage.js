import React, { useState } from "react";
import "./ReqPass.css";
import { useAdmin } from "../hooks/useAdmin";
import { useNavigate } from "react-router";

export default function RequestPasswordPage() {
  const { giveAccess, accessGranted } = useAdmin();
  const [error, setError] = useState(false);

  const handleAccessPassword = (event) => {
    event.preventDefault();

    const fd = new FormData(event.target);
    const password = fd.get("password");
    giveAccess(password);

    if (!accessGranted) {
      setError(true);
    }
  };

  return (
    <section className="reqpass-page">
      <form className="req-pass-form" onSubmit={handleAccessPassword}>
        <label htmlFor="password">
          Please enter the password to access this section!
        </label>
        <input id="password" type="password" name="password" required />
        {error && (
          <p className="error-message">Incorrect password. Please try again.</p>
        )}
        <button type="submit" className="submit-button">
          Get In
        </button>
      </form>
    </section>
  );
}
