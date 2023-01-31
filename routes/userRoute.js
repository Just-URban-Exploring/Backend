import express from 'express';

const userRouter = express.Router();

import {addNewUser, userLoginController} from '../controller/userController.js';
import {userValidator} from '../middleware/userValidator.js';
import {validatorRequest} from '../middleware/validator.js';

userRouter
  .route('/registration')
    .post(userValidator, validatorRequest, addNewUser);

userRouter
  .route('/login')
    .post(userLoginController)

export default userRouter;