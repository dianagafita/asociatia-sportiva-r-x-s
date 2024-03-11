import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./axiosConfig";
import { BrowserRouter } from "react-router-dom";
import { AdminProvider } from "./context/AdminContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AdminProvider>
        <App />
      </AdminProvider>
    </BrowserRouter>
  </React.StrictMode>
);
