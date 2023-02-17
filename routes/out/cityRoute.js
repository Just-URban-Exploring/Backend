import express from "express";
import { addCity, getCity } from "../controller/cityController.js";

const cityRouter = express.Router();

cityRouter.route("/").post(addCity).get(getCity);

export default cityRouter;
