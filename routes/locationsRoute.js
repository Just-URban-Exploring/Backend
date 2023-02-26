import express from "express";

const locationsRouter = express.Router();

import { addLocation, getAllLocations, getLocation } from "../controller/locationsController.js";

locationsRouter.route("/").post(addLocation).get(getAllLocations);
locationsRouter.route("/:id").get(getLocation)

export default locationsRouter;
