import express from 'express';

const userRouter = express.Router();

import {addNewUser} from '../controller/userController.js';

userRouter
  .route('/registration')
    .post(addNewUser);

export default userRouter;