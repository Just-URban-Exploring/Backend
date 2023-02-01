import mongoose, {Schema, model} from 'mongoose';



const userSchema = new Schema ({
  profilname: {
    type: String,
    required: true,
    unique: true,
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
    unique: true,
    trim: true
  },
  passwort: {
    type: String,
    required: true,
    min: 6
  },
  // avatar: {
  //   type: String
  // },
  // audio: {
  //   type: String,
  //   // required: true,
  //   default: false
  // },
  // abo: {
  //   type: String
  // },
  // isAdmin: {
  //   type: String,
  //   enum: ["user", "admin"],
  //   default: "user"
  // }
},{timestamps: true});

const userModel = model('User', userSchema);
export default userModel;