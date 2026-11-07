
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {


  const [user, setuser] = useState({
    name: "",
    email: "",
    // phone: "",
    password: "",
  });

  // handling the input value

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setuser({
      ...user,
      name: value,
    });
  };


  // handling the form submission?

  const handleSubmit = (e) =>{
    e.preventDefault();
    
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-teal-700">TruthLens</h1>

          <p className="text-gray-500 mt-2">
            Create your account and start verifying news.
          </p>
        </div>

        {/* Register Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Username */}
          <div>
            <label className="block text-sm font-medium mb-2">Username</label>
            <input
              name="name"
              onChange={handleChange}
              value={user.username}
              required
              autoComplete="off"
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
             onChange={handleChange}
           value = {user.email}
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-2">Password</label>

            <input
              onChange={handleChange}
           value = {user.password}
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
              name="password"
              type="password"
              placeholder="Confirm your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 rounded-lg transition"
          >
            Create Account
          </button>
        </form>

        {/* Login Link */}
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
