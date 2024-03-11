import multer from "multer";
import express from "express";
import { GameModel } from "../models/games.model.js";
import path from "path";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/games");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage });

router.post(
  "/addGame",
  upload.fields([{ name: "team1Logo" }, { name: "team2Logo" }]),
  async (req, res) => {
    try {
      const { name, group, team1Name, team2Name, time, place } = req.body;
      const { team1Logo, team2Logo } = req.files;

      const newGame = new GameModel({
        name,
        group,
        team1Name,
        team1Logo: {
          imageName: team1Logo[0].filename,
          imagePath: `/images/${team1Logo[0].filename}`,
        },
        team2Name,
        team2Logo: {
          imageName: team2Logo[0].filename,
          imagePath: `/images/${team2Logo[0].filename}`,
        },
        time,
        place,
      });

      await newGame.save();
      res.status(201).json({ message: "Game created successfully" });
    } catch (error) {
      console.error("Error creating game:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

router.get("/allGames", async (req, res) => {
  try {
    const games = await GameModel.find();
    res.json(games);
  } catch (error) {
    console.error("Error fetching games:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put(
  "/editGame/:id",
  upload.fields([
    { name: "team1Logo", maxCount: 1 },
    { name: "team2Logo", maxCount: 1 },
  ]),
  async (req, res) => {
    const { id } = req.params;
    const { name, group, team1Name, team2Name, time, place } = req.body;
    const { team1Logo, team2Logo } = req.files;

    try {
      const existingGame = await GameModel.findById(id);

      if (!existingGame) {
        return res.status(404).json({ error: "Game not found" });
      }

      const updatedFields = {
        name,
        group,
        team1Name,
        team2Name,
        time,
        place,
      };

      if (team1Logo) {
        updatedFields.team1Logo = {
          imageName: team1Logo[0].filename,
          imagePath: `/images/${team1Logo[0].filename}`,
        };
      } else {
        updatedFields.team1Logo = existingGame.team1Logo;
      }

      if (team2Logo) {
        updatedFields.team2Logo = {
          imageName: team2Logo[0].filename,
          imagePath: `/images/${team2Logo[0].filename}`,
        };
      } else {
        updatedFields.team2Logo = existingGame.team2Logo;
      }

      const game = await GameModel.findByIdAndUpdate(id, updatedFields, {
        new: true,
      });

      res.status(200).json({ message: "Game updated successfully", game });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

router.get("/:gameId", async (req, res) => {
  const { gameId } = req.params;
  const game = await GameModel.findById(gameId);
  res.send(game);
});

router.delete("/deleteGame/:id", async (req, res) => {
  const { id } = req.params;
  const game = await GameModel.findByIdAndDelete(id);
  res.status(200).json({ message: "Game deleted successfully" });
});

export default router;
