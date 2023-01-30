import User from '../models/userModel.js';

export const addNewUser = async (req,res) => {
  try {
    const newUser = req.body;
    const existsUser = await User.findOne({email: newUser.email});
    if(existsUser) {
      const error = new Error('Diese Email gibt es bereits');
      error.statusCode(400);
      throw error;
    }
    const {profilname, stadt, email, avatar, audio, abo, _id} = await User.create({
      ...newUser,
    });
    res.status(200).send({profilname, stadt, email, avatar, audio, abo, _id});
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
