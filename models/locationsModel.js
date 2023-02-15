import mongoose, { Schema, model } from "mongoose";

const locationsSchema = new Schema({
  name: { type: String },
  location: { latitude: { type: Number }, longitude: { type: Number } },
  info: { type: String },
  extendedInfo: { type: String },
  icon: { type: String },
  audioUrl: { type: String },
});

const locationsModel = model("Locations", locationsSchema);
export default locationsModel;
