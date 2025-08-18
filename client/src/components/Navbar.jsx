import { Link } from "react-router-dom";
import { FaGamepad, FaUser } from "react-icons/fa";
import { useAuth } from "../Context/AuthContext.jsx";

export const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-900 text-white shadow-lg fixed w-full z-100">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FaGamepad className="text-purple-500 text-2xl" />
            <Link to="/" className="font-bold text-xl">
              Gamify
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-purple-400 transition">
              Home
            </Link>
            <Link to="/about" className="hover:text-purple-400 transition">
              About
            </Link>
            <Link to="/contact" className="hover:text-purple-400 transition">
              Contact
            </Link>
            <Link
              to="/dashboard/profile"
              className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700 text-gray-300"
            >
              <FaUser />
              <span>Profile</span>
            </Link>

            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="px-4 py-2 rounded hover:bg-gray-700 transition border border-purple-500"
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => logout()}
                  className="px-4 py-2 rounded hover:bg-gray-700 transition border border-purple-500"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 rounded hover:bg-purple-700 transition bg-purple-600"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 rounded hover:bg-gray-700 transition border border-purple-500"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden hidden mt-4 pb-2">
          <div className="flex flex-col space-y-3">
            <Link to="/" className="hover:text-purple-400 transition">
              Home
            </Link>
            <Link to="/about" className="hover:text-purple-400 transition">
              About
            </Link>
            <Link to="/contact" className="hover:text-purple-400 transition">
              Contact
            </Link>

            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="px-4 py-2 rounded hover:bg-gray-700 transition border border-purple-500 text-center"
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => logout()}
                  className="px-4 py-2 rounded hover:bg-gray-700 transition border border-purple-500 text-center"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="flex flex-col space-y-3">
                <Link
                  to="/login"
                  className="px-4 py-2 rounded hover:bg-purple-700 transition bg-purple-600 text-center"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 rounded hover:bg-gray-700 transition border border-purple-500 text-center"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
