import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ForgotPassword() {
  const [step, setStep] = useState(1); // 1 = email, 2 = otp
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Send OTP to email
  const handleSendEmail = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      await axios.post("http://localhost:3000/api/auth/signin-otp", { email });
      setMessage("Reset code sent to your email!");
      setStep(2); // move to OTP input
    } catch (error) {
      setMessage("Something went wrong. Try again!");
    }
  };

  // Handle OTP input change
  const handleOtpChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < otp.length - 1) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  // Verify OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const otpCode = otp.join("");
      await axios.post("http://localhost:3000/api/auth/verify-otp", {
        email,
        otp: otpCode,
      });
      setMessage("OTP Verified!");
      navigate("/reset-password", { state: { email } });
    } catch (error) {
      setMessage("Invalid OTP, try again.");
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
        {step === 1 ? (
          <>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
              Forgot Password
            </h2>
            <p className="text-sm text-gray-300 mb-6">
              Please enter your email to reset the password
            </p>

            <form className="flex flex-col gap-6" onSubmit={handleSendEmail}>
              <div>
                <label className="block text-sm mb-1">Your Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="abc@gmail.com"
                  className="w-full border-b border-white/40 bg-transparent text-white placeholder-gray-300 focus:outline-none py-2"
                  required
                />
              </div>
              {message && <p className="text-sm text-yellow-300">{message}</p>}
              <button
                type="submit"
                className="bg-[#F7F4D9] text-green-800 font-semibold py-2 px-6 rounded-full hover:bg-[#ece9c5] transition"
              >
                Send Code
              </button>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
              Check your Email
            </h2>
            <p className="text-sm text-gray-300 mb-6">
              We sent a reset code to <span className="font-bold">{email}</span>
            </p>

            <form className="flex flex-col gap-6" onSubmit={handleVerifyOtp}>
              <div className="flex gap-3 justify-center">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleOtpChange(e.target.value, index)}
                    className="w-12 h-12 text-center text-lg border-b border-white/40 bg-transparent text-white focus:outline-none"
                  />
                ))}
              </div>
              {message && <p className="text-sm text-yellow-300">{message}</p>}
              <button
                type="submit"
                className="bg-[#F7F4D9] text-green-800 font-semibold py-2 px-6 rounded-full hover:bg-[#ece9c5] transition"
              >
                Verify Code
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default ForgotPassword;
