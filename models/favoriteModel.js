import mongoose, { Schema, model } from "mongoose";

const favoriteSchema = new Schema({
  favoriteLocations: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Locations", unique: true },
  ],
});

const favoriteModel = model("Favorite", favoriteSchema);

export default favoriteModel;
