import React, { useState } from "react";
import AdminPath from "../AdminPath";
import "./admin.css";
import { Route, Routes } from "react-router-dom";
import { ADMIN_URL } from "../secret";
import Dashboard from "./Dashboard/Dashboard";
import Sidebar from "./global/Sidebar";
import TopBar from "./global/TopBar";
import AddFutureGames from "./pages/Games/AddFutureGames";
import EditFutureGame from "./pages/Games/EditFutureGames/EditFutureGame";
import AddPlayedGames from "./pages/Games/AddPlayedGames/AddPlayedGames";
import PastGames from "./PastGames/PastGames";
import EditPastGame from "./pages/Games/EditPastGames/EditPastGames";

export default function Admin() {
  const [sideBar, setSideBar] = useState(true);

  return (
    <AdminPath>
      <div className="admin">
        <main className="content">
          <Sidebar isSidebar={setSideBar} />
          <Routes>
            <Route path={`/${ADMIN_URL}`} element={<Dashboard />} />
            <Route path="/future-game" element={<AddFutureGames />} />
            <Route path="/past-games" element={<AddPlayedGames />} />
            <Route path="/games/:id" element={<EditFutureGame />} />
            <Route path="/past-games/:id" element={<EditPastGame />} />
          </Routes>
        </main>
      </div>
    </AdminPath>
  );
}
