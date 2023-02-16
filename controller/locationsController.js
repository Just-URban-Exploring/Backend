import locationsModel from "../models/locationsModel.js";

// GET und POST einzelne Location
export const getLocation = async (req, res, next) => {
  try {
    const getLocation = await locationsModel.findById(req.params.id);
    res.send(getLocation);
  } catch (error) {
    next(error);
  }
};

export const addLocation = async (req, res, next) => {
  try {
    const newLocation = await locationsModel.create(req.body);
    res.send(newLocation);
  } catch (error) {
    next(error);
  }
};
