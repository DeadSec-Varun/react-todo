import mongoose from 'mongoose';

const passwordSchema = new mongoose.Schema({
  site: { type: String, required: true },
  username: { type: String, default: true },
  password: { type: String, default: true }
});

const Password = mongoose.model("Password", passwordSchema);

export default Password;