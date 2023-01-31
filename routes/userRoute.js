import express from 'express';

const userRouter = express.Router();

import {addNewUser} from '../controller/userController.js';
import {userValidator} from '../middleware/userValidator.js';
import {validatorRequest} from '../middleware/validator.js';

userRouter
  .route('/registration')
    .post(userValidator, validatorRequest, addNewUser);

export default userRouter;