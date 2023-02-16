import favoriteModel from "../models/favoriteModel.js";

export const getFavorite = async (req, res, next) => {
  try {
    const getFavorite = await favoriteModel.findById(req.params.id);
    res.send(getFavorite);
  } catch (error) {
    next(error);
  }
};

export const addFavorite = async (req, res, next) => {
  try {
    const newFavorite = await favoriteModel.create(req.body);
    res.send(newFavorite);
  } catch (error) {
    next(error);
  }
};
