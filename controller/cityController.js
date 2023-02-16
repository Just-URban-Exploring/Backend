import cityModel from "../models/cityModel.js";

export const getCity = async (req, res, next) => {
  try {
    const getCity = await cityModel.findById(req.params.id);
    res.send(getCity);
  } catch (error) {
    next(error);
  }
};

export const addCity = async (req, res, next) => {
  try {
    const newCity = await cityModel.create(req.body);
    res.send(newCity);
  } catch (error) {
    next(error);
  }
};
