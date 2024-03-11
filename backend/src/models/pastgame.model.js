import { Schema, model } from "mongoose";

export const imagesSchema = new Schema({
  imageName: String,
  imagePath: String,
});

export const PastGameSchema = new Schema(
  {
    name: { type: String, required: true },
    group: { type: String, required: true },
    date: { type: String, required: true },
    headerPhoto: imagesSchema,
    details: { type: String, required: true },
    gamePhotos: [imagesSchema],
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

export const PastGameModel = model("pastgame", PastGameSchema);
