import User from "../models/userModel.js";
import Location from "../models/locationsModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Registrierung
export const addNewUser = async (req, res) => {
  try {
    const newUser = req.body;
    const hashedPw = await bcrypt.hash(newUser.password, 10);
    const { profilname, stadt, email, favorites, avatar, audio, abo, _id } =
      await User.create({
        ...newUser,
        password: hashedPw,
      });
    res.status(200).send({
      profilname,
      stadt,
      email,
      favorites,
      // avatar, audio, abo, _id
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

// Login
export const userLoginController = async (req, res, next) => {
  try {
    const userData = req.body;
    const userInDb = await User.findOne({
      email: userData.email,
      // profilname: userData.profilname
    });
    if (!userInDb) {
      const error = new Error(`Email ${userData.email} stimmt nicht überein`);
      error.statusCode = 401;
      throw error;
    }
    const checkPw = await bcrypt.compare(userData.password, userInDb.password);
    if (!checkPw) {
      const error = new Error(`Invalid Passwort`);
      error.statusCode = 401;
      throw error;
    }
    const token = jwt.sign(
      {
        email: userInDb.email,
        userId: userInDb._id,
      },
      process.env.SECRET_KEY || "Geheimnis",
      { expiresIn: "3h" }
    );
    res.send({
      message: "Login erfolgreich",
      token,
    });
  } catch (error) {
    next(error);
  }
};

// GET User by Id
export const getUserDataController = async (req, res, next) => {
  try {
    const id = req.params.id;
    const userData = await User.findById(id);
    res.json(userData);
  } catch (error) {
    next(error);
  }
};

// Update User
export const userUpdate = async (req, res) => {
  try {
    const id = req.params.id;
    const update = req.body;
    const userUpdate = await User.findByIdAndUpdate(id, update, { new: true });
    res.status(200).send(userUpdate);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

// Eine neue Location als Favorite hinzufügen

export const addFavoriteToUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const locationId = req.body.like;
    const currentUser = await User.findById(userId);
    if (currentUser.favorites.includes(locationId)) {
      currentUser.favorites.remove(locationId);
    } else {
      currentUser.favorites.push(locationId);
    }
    await currentUser.save();
    res.status(200).send(currentUser);
  } catch (error) {
    next();
  }
};
