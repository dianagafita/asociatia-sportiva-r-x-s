import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

import futureGamesRouter from "../src/routers/games.router.js";
import pastGamesRouter from "../src/routers/pastgames.router.js";
import path from "path";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicPath = join(__dirname, "..", "public");

const publicFolder = path.join(__dirname, "..", "src/public");

const app = express();
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.static(publicPath));
app.use(express.static(publicFolder));

app.use("/api/futureGames", futureGamesRouter);
app.use("/api/pastGames", pastGamesRouter);

app.get("*", (req, res) => {
  const indexFilePath = path.join(publicFolder, "index.html");
  res.sendFile(indexFilePath);
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
