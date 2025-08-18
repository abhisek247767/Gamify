import { Link } from "react-router-dom";
import { FaGamepad } from "react-icons/fa";
import { useAuth } from "../Context/AuthContext.jsx";

export const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-900 text-white shadow-lg fixed w-full z-10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FaGamepad className="text-purple-500 text-2xl" />
            <Link to="/" className="font-bold text-xl">
              Gamify
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/" className="hover:text-purple-400 transition">
              Home
            </Link>
            <Link to="/about" className="hover:text-purple-400 transition">
              About
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
        </div>
      </div>
    </nav>
  );
};
