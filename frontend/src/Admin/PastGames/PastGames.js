import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import "../Dashboard/Dashboard.css";
import { useNavigate } from "react-router-dom";

export default function PastGames() {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get("/api/pastGames/allPastGame");
        setGames(response.data);
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
          onClick={() => navigate(`/past-games/${params.row.id}`)}
        >
          {params.row.name}
        </div>
      ),
    },
    { field: "group", headerName: "GROUP NAME", flex: 1 },
    { field: "date", headerName: "DATE", flex: 1 },
    { field: "details", headerName: "DETAILS", flex: 1 },
  ];

  return (
    <>
      <div className="data-grid-future-games">
        <h1>Past Games</h1>
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
    </>
  );
}
