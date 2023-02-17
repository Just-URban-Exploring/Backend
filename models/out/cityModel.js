import mongoose, { Schema, model } from "mongoose";

const citySchema = new Schema({
  stadt: { type: String },
  location: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Locations", unique: true },
  ],
  info: { type: String },
});

const cityModel = model("Cities", citySchema);
export default cityModel;
