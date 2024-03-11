import { connect, set } from "mongoose";
import { DUMMY_GAMES } from "../../data.js";
import { GameModel } from "../models/games.model.js";

set("strictQuery", true);

export const dbconnect = async () => {
  try {
    connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await seedGames();
    console.log("connected succesfully---");
  } catch (error) {
    console.log(error);
  }
};

async function seedGames() {
  const gameCount = await GameModel.countDocuments();

  if (gameCount > 0) {
    console.log("Games seed is already done!");
    return;
  }

  for (let game of DUMMY_GAMES) {
    await GameModel.create(game);
  }
}
