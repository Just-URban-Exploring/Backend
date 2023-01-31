import User from '../models/userModel.js';
import bcrypt from 'bcrypt';

export const addNewUser = async (req,res) => {
  try {
    const newUser = req.body;
    const hashedPw = await bcrypt.hash(newUser.passwort, 10);
    const {profilname, stadt, email, avatar, audio, abo, _id} = await User.create({
      ...newUser,
      passwort: hashedPw,
    });
    res.status(200).send({profilname, stadt, email, avatar, audio, abo, _id});
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
