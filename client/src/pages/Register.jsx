import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./store/auth";
// const navigate = useNavigate();
// const navigate = useNavigate();



const Register = () => {
  const navigate = useNavigate();

  const [user, setuser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const { storeTokenInLs } = useAuth();

  // Handle input changes
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setuser({
      ...user,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check whether passwords match
    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      // Remove confirmPassword before sending to backend
      const { confirmPassword, ...registerData } = user;

      const response = await fetch(
        "http://localhost:5001/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(registerData),
        }
      );

      // Read response only once
      const res_data = await response.json();

      console.log("Backend response:", res_data);

      if (response.ok) {

        // Store token using Auth Context
        storeTokenInLs(res_data.token);

        setuser({
          name: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
        });

        alert("Registration successful!");

        navigate("/login");

      } else {
        alert(res_data.message || "Registration failed");
      }

    } catch (error) {
      console.log("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };


  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-teal-700">TruthLens</h1>
          <p className="text-gray-500 mt-2">
            Create your account and start verifying news.
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Username */}
          <div>
            <label className="block text-sm font-medium mb-2">Username</label>
            <input
              name="name"
              value={user.name}
              onChange={handleChange}
              required
              type="text"
              placeholder="Enter your username"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              name="email"
              value={user.email}
              onChange={handleChange}
              required
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Phone Number
            </label>
            <input
              name="phone"
              value={user.phone}
              onChange={handleChange}
              required
              type="tel"
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              name="password"
              value={user.password}
              onChange={handleChange}
              required
              type="password"
              placeholder="Create a password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Confirm Password
            </label>
            <input
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleChange}
              required
              type="password"
              placeholder="Confirm your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 rounded-lg transition"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-gray-600 mt-7">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-teal-700 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
