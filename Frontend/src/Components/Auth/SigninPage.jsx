import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; // If you want to redirect after login
import { useEffect } from "react";

export default function SigninPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    identifier: "", // email or username
    password: "",
    remember: false,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    const userStr = urlParams.get("user");

    if (token && userStr) {
      try {
        const user = JSON.parse(decodeURIComponent(userStr));

        // Save token and user (always localStorage for Google login)
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        // Clean URL and redirect
        window.history.replaceState({}, document.title, "/");
        navigate("/");
      } catch (err) {
        console.error("Failed to parse user:", err);
      }
    }
  }, [navigate]);


  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (!formData.identifier || !formData.password) {
      setMessage("All fields are required");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/api/auth/signin", {
        name: formData.identifier,
        email: formData.identifier,
        password: formData.password,
      });

      // Store JWT token in localStorage
      localStorage.setItem("token", res.data.token);

      setMessage(res.data.msg || "Login successful!");

      // Redirect to dashboard or home
      navigate("/");
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data && error.response.data.msg) {
        setMessage(error.response.data.msg);
      } else {
        setMessage("Server error");
      }
    }

    setLoading(false);
  };

  // Inside SigninPage component
  const handleGoogleSignIn = () => {
    window.location.href = "http://localhost:3000/api/auth/google";
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
            Welcome to your path toward a blessed journey.
          </p>
        </div>

        <div className="flex justify-center md:justify-start mt-10">
          <img src="/Image/loginImage.png" alt="Illustration" className="w-72" />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-green-700 text-white px-12 py-10 rounded-r-2xl flex flex-col justify-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
          Welcome to the Al-Hijrat <br /> community
        </h2>

        {/* Google Login */}
        <button
          onClick={handleGoogleSignIn}
          className="w-fit mx-auto bg-[#F7F4D9] text-green-800 py-2 px-6 rounded-full flex items-center justify-center gap-3 font-medium mb-10 hover:bg-[#ece9c5] transition"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Login with Google
        </button>


        {/* Form */}
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          {/* Email / Username */}
          <div>
            <label className="block text-sm mb-1">Email/ Username</label>
            <input
              type="text"
              name="identifier"
              value={formData.identifier}
              onChange={handleChange}
              placeholder="abc@gmail.com"
              className="w-full border-b border-white/40 bg-transparent text-white placeholder-gray-300 focus:outline-none py-2"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-sm mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
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
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                className="accent-green-400"
              />
              <span>Remember me</span>
            </div>
            <Link to="/forgot-password" className="hover:underline">
              Forgot Password ?
            </Link>
          </div>

          {/* Message */}
          {message && <p className="text-sm text-red-400">{message}</p>}

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="self-center bg-[#F7F4D9] text-green-800 font-semibold py-2 px-12 rounded-full hover:bg-[#ece9c5] transition disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
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
