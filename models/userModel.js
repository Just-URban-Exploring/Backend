import mongoose, {Schema, model} from 'mongoose';

const userSchema = new Schema ({
  profilname: {
    type: String,
    required: true
  },
  stadt: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  passwort: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  audio: {
    type: String,
    required: true,
    default: false
  },
  abo: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    required: true, 
    default: false
  }
});

const userModel = model('User', userSchema);
export default userModel;