
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../pages/store/auth";

const Navbar = () => {
  const { isLoggedIn, user } = useAuth();
  const [showProfile, setShowProfile] = useState(false);

  const navStyle = ({ isActive }) =>
    `relative py-2 text-sm font-medium transition-all duration-300
    ${
      isActive
        ? "text-teal-700 font-semibold after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-teal-700"
        : "text-gray-600 hover:text-teal-700 hover:after:w-full after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-teal-700 after:transition-all after:duration-300"
    }`;

  const profileName = user?.name || user?.username || "User";
  const profileImage = user?.profileImage || user?.avatar || user?.image;

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-teal-700 hover:text-teal-900 transition"
          >
            TruthLens
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">

            <NavLink to="/" end className={navStyle}>
              Home
            </NavLink>

            <NavLink to="/about" className={navStyle}>
              About
            </NavLink>

            <NavLink to="/contact" className={navStyle}>
              Contact
            </NavLink>

            {isLoggedIn && (
              <>
                <NavLink to="/detector" className={navStyle}>
                  Detector
                </NavLink>

                <NavLink to="/blogs" className={navStyle}>
                  Blogs
                </NavLink>
              </>
            )}

          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">

            {!isLoggedIn ? (
              <>
                <NavLink
                  to="/login"
                  className="text-sm font-semibold text-teal-700 hover:text-teal-900"
                >
                  Login
                </NavLink>

                <NavLink
                  to="/register"
                  className="bg-teal-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-teal-800 transition"
                >
                  Register
                </NavLink>
              </>
            ) : (

              /* Profile Dropdown */
              <div className="relative">

                <button
                  onClick={() => setShowProfile(!showProfile)}
                  className="flex items-center gap-2 rounded-full hover:bg-gray-100 p-1 transition"
                >

                  {/* Circular Profile Image */}
                  {profileImage ? (
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="w-10 h-10 rounded-full object-cover border-2 border-teal-600"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-teal-700 text-white flex items-center justify-center font-bold text-lg border-2 border-teal-600">
                      {profileName.charAt(0).toUpperCase()}
                    </div>
                  )}

                  <span className="hidden sm:block text-sm font-semibold text-gray-700">
                    {profileName}
                  </span>

                  <span className="text-gray-500 text-xs">
                    ▼
                  </span>

                </button>

                {/* Dropdown Menu */}
                {showProfile && (
                  <div className="absolute right-0 mt-3 w-60 bg-white rounded-xl shadow-xl border border-gray-200 py-3 z-50">

                    {/* User Information */}
                    <div className="px-4 pb-3 border-b border-gray-100">
                      <p className="font-semibold text-gray-800">
                        {profileName}
                      </p>

                      <p className="text-xs text-gray-500 truncate">
                        {user?.email || ""}
                      </p>
                    </div>

                    {/* Profile */}
                    <Link
                      to="/profile"
                      onClick={() => setShowProfile(false)}
                      className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition"
                    >
                      <span>👤</span>
                      My Profile
                    </Link>

                    {/* History */}
                    <Link
                      to="/history"
                      onClick={() => setShowProfile(false)}
                      className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition"
                    >
                      <span>📋</span>
                      My History
                    </Link>

                    <div className="border-t border-gray-100 my-2"></div>

                    {/* Logout */}
                    <Link
                      to="/logout"
                      onClick={() => setShowProfile(false)}
                      className="flex items-center gap-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition"
                    >
                      <span>↪</span>
                      Logout
                    </Link>

                  </div>
                )}

              </div>
            )}

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
