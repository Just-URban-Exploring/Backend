import express from "express";

const locationsRouter = express.Router();

import {
  getCity,
  addCity,
  addLocation,
} from "../controller/locationsController.js";

locationsRouter.route("/").post(addCity);
locationsRouter.route("/:id/").get(getCity);
locationsRouter.route("/:id").patch(addLocation);

export default locationsRouter;
