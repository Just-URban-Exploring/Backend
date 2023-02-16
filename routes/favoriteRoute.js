import express from "express";
import { addFavorite, getFavorite } from "../controller/favoriteController.js";

const favoriteRouter = express.Router();

favoriteRouter.route("/").get(getFavorite).post(addFavorite);

export default favoriteRouter;
