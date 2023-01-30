import express from 'express';

const router = express.Router();

import {addNewUser} from '../controller/userController.js';

router
  .route('/registration')
    .post(addNewUser);

export default router;