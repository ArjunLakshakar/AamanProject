import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import UserSchema from "../Model/UserSchema.js";
import { sendEmail } from "../utils/sendEmail.js";

const genOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

// Signup
export const signup = async (req, res) => {
  const { name, email, mobile, password } = req.body;

  // Check required fields
  if (!name || !email || !mobile || !password) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  try {
    // Check if user already exists
    const existing = await UserSchema.findOne({ email });
    if (existing) return res.status(400).json({ msg: "User already exists" });

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = new UserSchema({ name, email, mobile, password: hashedPassword });
    await user.save();

    res.status(201).json({ msg: "User registered successfully" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ msg: "Server error" });
  }
};


// Signin
export const signin = async (req, res) => {
  const { name, email, password } = req.body;

  // Check if password and either name or email is provided
  if (!password || (!email && !name)) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  try {
    // Find user by email or name
    const user = await UserSchema.findOne({
      $or: [{ email: email || "" }, { name: name || "" }],
    });

    if (!user) return res.status(400).json({ msg: "User not found, please sign up" });

    // Compare hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    // Generate JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || "secret", {
      expiresIn: "2h",
    });

    res.json({
      msg: "Logged in",
      token,
      user: { email: user.email, name: user.name },
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ msg: "Server error" });
  }
};

// send OTP for signin (only if user exists)
export const signinOtp = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ msg: "Email required" });

    const user = await UserSchema.findOne({ email });
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

    const user = await UserSchema.findOne({ email });
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


export const resetPassword = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ msg: "All fields required" });

  const user = await UserSchema.findOne({ email });
  if (!user) return res.status(400).json({ msg: "User not found" });

  const hashedPassword = await bcrypt.hash(password, 10);
  user.password = hashedPassword;
  await user.save();

  res.json({ msg: "Password reset successful" });
};


// GET /api/auth/me
export const me = async (req, res) => {
  try {
    const user = await UserSchema.findById(req.userId).select("_id email");
    if (!user) return res.status(404).json({ msg: "User not found" });
    res.json(user);
  } catch (e) {
    res.status(500).json({ msg: "Server error" });
  }
};
