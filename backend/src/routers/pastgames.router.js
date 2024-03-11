import multer from "multer";
import express from "express";
import { PastGameModel } from "../models/pastgame.model.js";
import path from "path";

const router = express.Router();

const storage2 = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/pastGames");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload2 = multer({ storage: storage2 });

router.get("/allPastGame", async (req, res) => {
  const games = await PastGameModel.find();
  res.json(games);
});

router.post(
  "/addPastGame",
  upload2.fields([{ name: "headerPhoto" }, { name: "gamePhotos" }]),
  async (req, res) => {
    try {
      const { name, group, date, details } = req.body;
      const { headerPhoto, gamePhotos } = req.files;
      console.log("Files received:", req.files);

      const newPastGameData = {
        name,
        group,
        date,
        headerPhoto: {
          imageName: headerPhoto[0].filename,
          imagePath: `/pastGames/${headerPhoto[0].filename}`,
        },
        details,
      };

      if (gamePhotos && gamePhotos.length > 0) {
        newPastGameData.gamePhotos = gamePhotos.map((photo) => ({
          imageName: photo.filename,
          imagePath: `/pastGames/${photo.filename}`,
        }));
      }

      const newPastGame = new PastGameModel(newPastGameData);
      await newPastGame.save();
      res.status(201).json({ message: "Past game created successfully" });
    } catch (error) {
      console.error("Error creating past game:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

router.get("/allPastGames/:group", async (req, res) => {
  try {
    const { group } = req.params;
    const pastGames = await PastGameModel.find({ group }); // Corrected line
    res.json(pastGames);
  } catch (error) {
    console.error("Error fetching past games:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const pastGames = await PastGameModel.findById(id);
    res.json(pastGames);
  } catch (error) {
    console.error("Error fetching past games:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put(
  "/editPastGame/:id",
  upload2.fields([{ name: "headerPhoto" }, { name: "gamePhotos" }]),
  async (req, res) => {
    const { id } = req.params;
    const { name, group, date, details } = req.body;
    const { headerPhoto, gamePhotos } = req.files;

    try {
      const existingGame = await PastGameModel.findById(id);

      if (!existingGame) {
        return res.status(404).json({ error: "Game not found" });
      }

      const updatedFields = {
        name,
        group,
        date,
        details,
      };

      if (headerPhoto) {
        updatedFields.headerPhoto = {
          imageName: headerPhoto[0].filename,
          imagePath: `/pastGames/${headerPhoto[0].filename}`,
        };
      } else {
        updatedFields.headerPhoto = existingGame.headerPhoto;
      }

      if (gamePhotos && gamePhotos.length > 0) {
        newPastGameData.gamePhotos = gamePhotos.map((photo) => ({
          imageName: photo.filename,
          imagePath: `/pastGames/${photo.filename}`,
        }));
      }

      const game = await PastGameModel.findByIdAndUpdate(id, updatedFields, {
        new: true,
      });

      res.status(200).json({ message: "Game updated successfully", game });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

router.delete("/deletePastGame/:id", async (req, res) => {
  const { id } = req.params;
  await PastGameModel.findByIdAndDelete(id);
  res.status(200).json({ message: "Game deleted successfully" });
});
export default router;
