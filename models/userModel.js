import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    profilname: {
      type: String,
      required: true,
      trim: true,
      min: 3,
      max: 20,
    },
    stadt: {
      type: String,
      required: true,
      trim: true,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: [true, "Email Exist"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a password!"],
      unique: false,
      min: 6,
    },
    // avatar: {
    //   type: String
    // },
    // abo: {
    //   type: String
    // },
    // isAdmin: {
    //   type: String,
    //   enum: ["user", "admin"],
    //   default: "user"
    // }
    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Location" }],
  },
  { timestamps: true }
);

const userModel = model("User", userSchema);
export default userModel;
