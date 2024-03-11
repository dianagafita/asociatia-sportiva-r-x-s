import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import PastGames from "../PastGames/PastGames";

export default function Dashboard() {
  const [games, setGames] = useState([]);
  const [pastGames, setPastGames] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get("/api/futureGames/allGames");
        // const data = await axios.get("/api/allPastGames");
        setGames(response.data);
        // setPastGames(data.data);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };
    fetchGames();
  }, []);

  const columns = [
    {
      field: "name",
      headerName: "NAME",
      flex: 1,
      cellClassName: "name-column--cell",
      renderCell: (params) => (
        <div
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/games/${params.row.id}`)}
        >
          {params.row.name}
        </div>
      ),
    },
    { field: "group", headerName: "GROUP NAME", flex: 1 },
    { field: "team1Name", headerName: "TEAM 1", flex: 1 },
    { field: "team2Name", headerName: "TEAM 2", flex: 1 },
    { field: "time", headerName: "TIME", flex: 1 },
    { field: "place", headerName: "PLACE", flex: 1 },
  ];

  return (
    <div className="fit-contents">
      <Box p="20px" backgroundColor="var(--main-color)">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        </Box>
      </Box>
      <div className="data-grid-future-games">
        <h1>Future Games</h1>
      </div>
      <div
        className="data-grid-container"
        style={{
          overflowX: "auto",
          marginBottom: "40px",
        }}
      >
        <Box
          m="10px 0"
          height="fit-content"
          width="100vw"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: "var(--second-color)",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "var(--main-color)",
              color: "white",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: "white",
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: "var(--main-color)",
              color: "white",
            },
          }}
        >
          <DataGrid rows={games} columns={columns} />
        </Box>
      </div>
      <PastGames />
    </div>
  );
}
