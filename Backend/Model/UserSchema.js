import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    otp: { type: String, default: null },
    otpExpiry: { type: Date, default: null },
    googleId: { type: String, default: null },  
    name: { type: String, default: null },      
  },
  { timestamps: true }
);

export default mongoose.model('User', UserSchema);