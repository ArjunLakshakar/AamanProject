import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-screen h-screen flex bg-gray-200">
      {/* Left Section */}
      <div className="w-1/2 bg-white flex flex-col justify-between px-12 py-10 rounded-l-2xl">
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start">
          <div className="w-20 h-20 rounded-full border-8 border-green-600 bg-yellow-200 flex items-center justify-center mb-6">
            <span className="font-semibold text-black">Logo</span>
          </div>

          {/* Text */}
          <p className="text-green-700 text-2xl font-light leading-relaxed max-w-sm">
            Sign up to explore, compare, and book the perfect Umrah & Hajj
            package for you.
          </p>
        </div>

        {/* Illustration */}
        <div className="flex justify-center md:justify-start mt-10">
          <img
            src="/Image/loginImage.png"
            alt="Illustration"
            className="w-72"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-green-700 text-white px-12 py-10 rounded-r-2xl flex flex-col justify-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          Create your Account
        </h2>

        {/* Google Sign Up */}
        <button className="w-full bg-[#F7F4D9] text-green-800 py-3 rounded-full flex items-center justify-center gap-3 font-medium mb-8 hover:bg-[#ece9c5] transition">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Sign up with Google
        </button>

        {/* Form */}
        <form className="flex flex-col gap-6">
          {/* Username */}
          <div>
            <label className="block text-sm mb-1">Username</label>
            <input
              type="text"
              placeholder="ABC123"
              className="w-full border-b border-white/40 bg-transparent text-white placeholder-gray-300 focus:outline-none py-2"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-sm mb-1">Mobile Number</label>
            <input
              type="text"
              placeholder="1234567890"
              className="w-full border-b border-white/40 bg-transparent text-white placeholder-gray-300 focus:outline-none py-2"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="abc@gmail.com"
              className="w-full border-b border-white/40 bg-transparent text-white placeholder-gray-300 focus:outline-none py-2"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-sm mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="********"
              className="w-full border-b border-white/40 bg-transparent text-white placeholder-gray-300 focus:outline-none py-2 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 bottom-3 text-white/70"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Terms */}
          <div className="flex items-center gap-2">
            <input type="checkbox" className="accent-green-400" />
            <span className="text-sm">
              I accept the terms & Condition
            </span>
          </div>

          {/* Sign Up Button */}
          <button className="self-start bg-[#F7F4D9] text-green-800 font-semibold py-2 px-6 rounded-full hover:bg-[#ece9c5] transition">
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="text-center mt-10 text-sm text-gray-200">
          Own an Account?{" "}
          <a href="/signin" className="font-bold underline">
            JUMP RIGHT IN
          </a>
        </p>
      </div>
    </div>
  );
}
