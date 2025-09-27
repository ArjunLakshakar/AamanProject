import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setMessage("");

    if (password !== confirm) {
      setMessage("Passwords do not match!");
      return;
    }
    console.log(email , password)

    try {
      await axios.post("http://localhost:3000/api/auth/resetPassword", {
        email,
        password,
      });
      setMessage("Password reset successful!");
      setTimeout(() => navigate("/signin"), 1500); // redirect to login
    } catch (error) {
      setMessage("Failed to reset password. Try again.");
    }
  };

  return (
    <div className="w-screen h-screen flex bg-gray-200">
      {/* Left Section */}
      <div className="w-1/2 bg-white flex flex-col justify-between px-12 py-10 rounded-l-2xl">
        <div className="flex flex-col items-center md:items-start">
          <div className="w-20 h-20 rounded-full border-8 border-green-600 bg-yellow-200 flex items-center justify-center mb-6">
            <span className="font-semibold text-black">Logo</span>
          </div>
          <p className="text-green-700 text-2xl font-light leading-relaxed max-w-sm">
            Making Your Sacred Journey Simpler Than Ever.
          </p>
        </div>
        <div className="flex justify-center md:justify-start mt-10">
          <img src="/Image/loginImage.png" alt="Illustration" className="w-72" />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-green-700 text-white px-12 py-10 rounded-r-2xl flex flex-col justify-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">
          Reset Password
        </h2>

        <form className="flex flex-col gap-6" onSubmit={handleResetPassword}>
          <div>
            <label className="block text-sm mb-1">New Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="w-full border-b border-white/40 bg-transparent text-white placeholder-gray-300 focus:outline-none py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Confirm Password</label>
            <input
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              placeholder="********"
              className="w-full border-b border-white/40 bg-transparent text-white placeholder-gray-300 focus:outline-none py-2"
              required
            />
          </div>
          {message && <p className="text-sm text-yellow-300">{message}</p>}
          <button
            type="submit"
            className="bg-[#F7F4D9] text-green-800 font-semibold py-2 px-6 rounded-full hover:bg-[#ece9c5] transition"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
