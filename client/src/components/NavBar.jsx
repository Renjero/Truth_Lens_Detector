
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <NavLink to="/" className="text-2xl font-bold text-teal-700">
            TruthLens
          </NavLink>

          {/* Navigation NavLinks */}
          <div className="hidden md:flex items-center gap-8">

            <NavLink to="/" className="text-gray-700 hover:text-teal-700">
              Home
            </NavLink>

            <NavLink to="/about" className="text-gray-700 hover:text-teal-700">
              About
            </NavLink>

            <NavLink to="/contact" className="text-gray-700 hover:text-teal-700">
              Contact
            </NavLink>

          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">

            <NavLink
              to="/login"
              className="text-teal-700 font-medium hover:text-teal-900"
            >
              Login
            </NavLink>

            <NavLink
              to="/register"
              className="bg-teal-700 text-white px-4 py-2 rounded-lg hover:bg-teal-800 transition"
            >
              Register
            </NavLink>

          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
