import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext.jsx";

export const Home = () => {
  const { user } = useAuth();

  return (
    <section className="min-h-screen bg-gray-900 text-white pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Welcome to <span className="text-purple-500">Gamify</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
          Experience gaming like never before with our cloud-powered micro
          gaming platform.
        </p>

        {user ? (
          <Link
            to="/dashboard"
            className="px-6 py-3 rounded-lg hover:bg-purple-700 transition bg-purple-600 font-semibold"
          >
            Go to Dashboard
          </Link>
        ) : (
          <div className="flex justify-center gap-4">
            <Link
              to="/login"
              className="px-6 py-3 rounded-lg hover:bg-purple-700 transition bg-purple-600 font-semibold"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-6 py-3 rounded-lg hover:bg-gray-800 transition border border-purple-500 font-semibold"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
