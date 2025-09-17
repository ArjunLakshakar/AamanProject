import jwt from "jsonwebtoken";

import UserSchema from "../Model/UserSchema.js";
import { sendEmail } from "../utils/sendEmail.js";

const genOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

// send OTP for signup (only if user doesn't exist)
export const signupOtp = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ msg: "Email required" });

    const existing = await UserSchema.findOne({ email });
    if (existing) return res.status(400).json({ msg: "User already exists" });

    const otp = genOTP();
    const otpExpiry = new Date(Date.now() + 5 * 60 * 1000);

    const user = new User({ email, otp, otpExpiry });
    await user.save();

    await sendEmail(email, "Your OTP", `Your OTP is: ${otp} (valid 5 minutes)`);
    res.json({ msg: "Signup OTP sent" });
  } catch (e) {
    res.status(500).json({ msg: "Failed to send OTP" });
  }
};

// send OTP for signin (only if user exists)
export const signinOtp = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ msg: "Email required" });

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "User not found, please sign up" });

    const otp = genOTP();
    user.otp = otp;
    user.otpExpiry = new Date(Date.now() + 5 * 60 * 1000);
    await user.save();

    await sendEmail(email, "Your OTP", `Your OTP is: ${otp} (valid 5 minutes)`);
    res.json({ msg: "Signin OTP sent" });
  } catch (e) {
    res.status(500).json({ msg: "Failed to send OTP" });
  }
};

// POST /api/auth/verify-otp
export const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) return res.status(400).json({ msg: "Email and OTP required" });

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "User not found" });

    const expired = !user.otpExpiry || Date.now() > user.otpExpiry.getTime();
    if (expired) return res.status(400).json({ msg: "OTP expired" });
    if (user.otp !== otp) return res.status(400).json({ msg: "Invalid OTP" });

    // clear otp and issue token
    user.otp = null;
    user.otpExpiry = null;
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || "secret", {
      expiresIn: "2h",
    });

    res.json({
      msg: "Logged in",
      token,
      user: { email: user.email, name: user.name },
    });
  } catch (e) {
    res.status(500).json({ msg: "Server error" });
  }
};

// GET /api/auth/me
export const me = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("_id email");
    if (!user) return res.status(404).json({ msg: "User not found" });
    res.json(user);
  } catch (e) {
    res.status(500).json({ msg: "Server error" });
  }
};
