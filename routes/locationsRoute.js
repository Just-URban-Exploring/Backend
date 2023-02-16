import express from "express";

const locationsRouter = express.Router();

import { addLocation, getLocation } from "../controller/locationsController.js";

locationsRouter.route("/").post(addLocation).get(getLocation);

export default locationsRouter;
