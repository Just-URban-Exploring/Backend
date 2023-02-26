import express from "express";

const locationsRouter = express.Router();

import { addLocation, getLocation } from "../controller/locationsController.js";

locationsRouter.route("/poi").post(addLocation).get(getLocation);

export default locationsRouter;
