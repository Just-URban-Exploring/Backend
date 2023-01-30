import User from '../models/userModel.js';

export const addNewUser = async (req,res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(200).json(newUser);
  } catch (error) {
    console.log(error);
  }
};
