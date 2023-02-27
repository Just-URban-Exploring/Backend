import locationsModel from "../models/locationsModel.js";

// GET und POST einzelne Location
export const getLocation = async (req, res, next) => {
  try {
    const getLocation = await locationsModel.findById(req.params.id);
    res.send({
      message: "Hier ist die Location mit der gesuchten id.",
      getLocation,
    });
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


// Ab hier: Get ALL Locations
export const getAllLocations = async (req, res, next) => {
  try {
    const getAllLocations = await locationsModel.find();
    res.send({
      message: "Hier sind alle Locations.",
      getAllLocations,
    });
  } catch (error) {
    next(error);
  }
};