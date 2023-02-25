import express from "express";
import cors from "cors";

const userRouter = express.Router();

import {
  addNewUser,
  userLoginController,
  getUserDataController,
  addFavoriteToUser,
} from "../controller/userController.js";
import { userValidator } from "../middleware/userValidator.js";
import { validatorRequest } from "../middleware/validator.js";
// import { auth } from "../middleware/auth.js";

app.options("*", cors());
userRouter.route("/register").post(userValidator, validatorRequest, addNewUser);

userRouter.route("/login").post(userLoginController);

userRouter.route("/:id/fav").get(getUserDataController).post(addFavoriteToUser);

export default userRouter;
