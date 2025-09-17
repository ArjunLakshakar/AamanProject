import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function SigninPage() {
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
            Welcome to your path toward a blessed journey.
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
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
          Welcome to the Al-Hijrat <br /> community
        </h2>

        {/* Google Login */}
        <button className="w-fit mx-auto bg-[#F7F4D9] text-green-800 py-2 px-6 rounded-full flex items-center justify-center gap-3 font-medium mb-10 hover:bg-[#ece9c5] transition">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Login with Google
        </button>

        {/* Form */}
        <form className="flex flex-col gap-6">
          {/* Email / Username */}
          <div>
            <label className="block text-sm mb-1">Email/ Username</label>
            <input
              type="text"
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

          {/* Options Row */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="accent-green-400" />
              <span>Remember me</span>
            </div>
            <a href="/forgot" className="hover:underline">
              Forgot Password ?
            </a>
          </div>

          {/* Login Button */}
          <button className="self-center bg-[#F7F4D9] text-green-800 font-semibold py-2 px-12 rounded-full hover:bg-[#ece9c5] transition">
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center mt-10 text-sm text-gray-200">
          No Account Yet ?{" "}
          <a href="/signup" className="font-bold underline">
            SignUp
          </a>
        </p>
      </div>
    </div>
  );
}
