import locationsModel from "../models/locationsModel.js";

export const getCity = async (req, res, next) => {
  try {
    const getCity = await locationsModel.findById(req.params.id);
    res.send(getCity);
  } catch (error) {
    next(error);
  }
};
export const addCity = async (req, res, next) => {
  try {
    const newCity = await locationsModel.create(req.body);
    res.send(newCity);
  } catch (error) {
    next(error);
  }
};

export const addLocation = async (req, res, next) => {
  try {
    const newLocation = await locationsModel.findByIdAndUpdate(req.params.id);
    res.send(newLocation);
  } catch (error) {
    next(error);
  }
};
