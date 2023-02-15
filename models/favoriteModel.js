import mongoose, { Schema, model } from "mongoose";

const favoriteSchema = new Schema({
stadt: { location1: "xyz", 
        location2: "akjsjh" },
stadt2: {location1:"kasklds"},
stadt3: {}
});

const favoriteModel = model("Favorite", favoriteSchema);
