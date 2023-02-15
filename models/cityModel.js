import mongoose, { Schema, model } from "mongoose";

const citySchema = new Schema({
  stadt: { type: String },
  location: [{}],
});

const cityModel = model("Cities", citySchema);
export default cityModel;
