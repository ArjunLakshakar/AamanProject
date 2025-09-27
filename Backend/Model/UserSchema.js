import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, default: null },  
    mobile: { type: String, default: null },
    email: { type: String, required: true, unique: true },
    password: { type: String, default: null }, 
    otp: { type: String, default: null },
    otpExpiry: { type: Date, default: null },
    googleId: { type: String, default: null },  
  },
  { timestamps: true }
);

export default mongoose.model('User', UserSchema);