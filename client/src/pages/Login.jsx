import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./store/auth";

const URL = "http://localhost:5001/api/auth/login";
const Login = () => {
  const navigate = useNavigate();
  // / 1. Store form data
  const [user, setuser] = useState({
    email: "",
    password: "",
  });
const { storeTokenInLs } = useAuth();


  // 2. Collect input data
  const handleChange = (e) => {
    setuser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // 3. Get data when user clicks Login

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(user);

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      // Declare data here
      const data = await response.json();

      console.log(data);

      if (response.ok) {
          storeTokenInLs(data.token);
        // localStorage.setItem("token", data.token);

        setuser({
          email: "",
          password: "",
        });

        alert("Login successful!");
        navigate("/");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-teal-700">TruthLens</h1>

          <p className="text-gray-500 mt-2">
            Welcome back! Login to your account.
          </p>
        </div>

        {/* Login Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Email Address
            </label>

            <input
              value={user.email}
              onChange={handleChange}
              name="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-2">Password</label>

            <input
              value={user.password}
              onChange={handleChange}
              name="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-sm text-teal-700 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 rounded-lg transition"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-gray-600 mt-7">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-teal-700 font-semibold hover:underline"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
