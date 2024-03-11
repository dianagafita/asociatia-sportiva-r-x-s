import { model, Schema } from "mongoose";

export const imageSchema = new Schema({
  imageName: String,
  imagePath: String,
});

export const GameSchema = new Schema(
  {
    name: { type: String, required: true },
    group: { type: String, required: true },
    team1Name: { type: String, required: true },
    team1Logo: imageSchema,
    team2Name: { type: String, required: true },
    team2Logo: imageSchema,
    time: { type: String, required: true },
    place: { type: String, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

export const GameModel = model("game", GameSchema);
