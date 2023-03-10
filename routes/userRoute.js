import express from "express";

const userRouter = express.Router();

import {
  addNewUser,
  userLoginController,
  getUserDataController,
  addFavoriteToUser,
  deleteOneUser,
} from "../controller/userController.js";
import { userValidator } from "../middleware/userValidator.js";
import { validatorRequest } from "../middleware/validator.js";
// import { auth } from "../middleware/auth.js";

userRouter
  .route("/registration")
  .post(userValidator, validatorRequest, addNewUser);

userRouter.route("/login").post(userLoginController);

userRouter.route("/:id")
  .delete(deleteOneUser);

userRouter.route("/:id/fav").get(getUserDataController).post(addFavoriteToUser);

export default userRouter;
