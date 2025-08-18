import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext.jsx";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

export function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoadingLocal, setIsLoadingLocal] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.email || !formData.password) {
      return setError("Please fill in all fields");
    }

    try {
      setIsLoadingLocal(true);
      const { success, message } = await login(formData);
      if (success) navigate("/dashboard");
      else setError(message || "Login failed");
    } catch {
      setError("An unexpected error occurred");
    } finally {
      setIsLoadingLocal(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-purple-500 mb-2">Gamify</h1>
          <h2 className="text-2xl font-bold">Login</h2>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-500/20 text-red-400 rounded-lg text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="flex items-center text-gray-400">
              <FaEnvelope className="mr-2" /> Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="flex items-center text-gray-400">
              <FaLock className="mr-2" /> Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                onClick={() => setShowPassword((s) => !s)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoadingLocal}
            className={`w-full py-2 px-4 rounded-lg font-semibold transition ${
              isLoadingLocal
                ? "bg-purple-700 cursor-not-allowed"
                : "bg-purple-600 hover:bg-purple-700"
            }`}
          >
            {isLoadingLocal ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="mt-6 text-center text-gray-400">
          Don't have an account?{" "}
          <Link to="/register" className="text-purple-400 hover:underline">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export function RegisterForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoadingLocal, setIsLoadingLocal] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      return setError("All fields are required");
    }

    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match");
    }

    if (formData.password.length < 6) {
      return setError("Password must be at least 6 characters");
    }

    try {
      setIsLoadingLocal(true);
      const { success, message } = await register({
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      if (success) navigate("/dashboard");
      else setError(message || "Registration failed");
    } catch {
      setError("An unexpected error occurred");
    } finally {
      setIsLoadingLocal(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-purple-500 mb-2">Gamify</h1>
          <h2 className="text-2xl font-bold">Register</h2>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-500/20 text-red-400 rounded-lg text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="flex items-center text-gray-400">
              <FaUser className="mr-2" /> Username
            </label>
            <input
              type="text"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter username"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="flex items-center text-gray-400">
              <FaEnvelope className="mr-2" /> Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter email"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="flex items-center text-gray-400">
              <FaLock className="mr-2" /> Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                onClick={() => setShowPassword((s) => !s)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div className="space-y-1">
            <label className="flex items-center text-gray-400">
              <FaLock className="mr-2" /> Confirm Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoadingLocal}
            className={`w-full py-2 px-4 rounded-lg font-semibold transition ${
              isLoadingLocal
                ? "bg-purple-700 cursor-not-allowed"
                : "bg-purple-600 hover:bg-purple-700"
            }`}
          >
            {isLoadingLocal ? "Registering..." : "Register"}
          </button>
        </form>

        <div className="mt-6 text-center text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-400 hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
