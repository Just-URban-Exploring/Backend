import User from '../models/userModel.js';

export const addNewUser = async (req,res) => {
  try {
    const {profilname, stadt, email, avatar, audio, abo, _id} = await User.create(req.body);
    res.status(200).send({profilname, stadt, email, avatar, audio, abo, _id});
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
