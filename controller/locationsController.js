import locationsModel from "../models/locationsModel.js";

// GET und POST einzelne Location
export const getLocation = async (req, res, next) => {
  try {
    const getLocation = await locationsModel.findById(req.params.id);
    res.send({
      message: "hey das sind meine Daten, du Honk",
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
