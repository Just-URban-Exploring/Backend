import User from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const addNewUser = async (req,res) => {
  try {
    const newUser = req.body;
    const hashedPw = await bcrypt.hash(newUser.passwort, 10);
    const {profilname, stadt, email, favorites, avatar, audio, abo, _id} = await User.create({
      ...newUser,
      passwort: hashedPw,
    });
    res.status(200).send({profilname, stadt, email, favorites
      // avatar, audio, abo, _id
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

export const userLoginController = async (req, res, next) => {
  try {
    const userData = req.body;
    const userInDb = await User.findOne({
      email: userData.email
      // profilname: userData.profilname
    });
    if(!userInDb) {
      const error = new Error(`Email ${userData.email} stimmt nicht überein`);
      error.statusCode = 401;
      throw error;
    }
    const checkPw = await bcrypt.compare(
      userData.passwort,
      userInDb.passwort
    );
    if(!checkPw) {
      const error = new Error (`Invalid Passwort`);
      error.statusCode = 401;
      throw error;
    }
    const token = jwt.sign({
      email: userInDb.email,
      userId: userInDb._id
    }, process.env.SECRET_KEY || 'Geheimnis',
      {expiresIn: '3h'});
      res.send({
        message: 'Login erfolgreich',
      token
    });
  } catch (error) {
    next(error)
  }
};

export const getUserDataController = async (req, res, next) => {
  try {
    const id= req.params.id;
    const userData = await User.findById(id);
    res.json(userData);
  } catch (error) {
    next(error);
  }
}
