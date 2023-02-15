import express from "express";

const userRouter = express.Router();

import {
  addNewUser,
  userLoginController,
  getUserDataController,
} from "../controller/userController.js";
import { userValidator } from "../middleware/userValidator.js";
import { validatorRequest } from "../middleware/validator.js";
import { auth } from "../middleware/auth.js";

userRouter
  .route("/registration")
  .post(userValidator, validatorRequest, addNewUser);

userRouter.route("/login").post(userLoginController);

userRouter.route("/:id").get(auth, getUserDataController);
// userRouter.route("/favorite");

export default userRouter;
