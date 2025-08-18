import { useAuth } from "../Context/AuthContext.jsx";
import { FaGamepad, FaUser, FaSignOutAlt, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-gray-800 min-h-screen p-4 fixed">
          <div className="flex items-center space-x-2 mb-10 p-2">
            <FaGamepad className="text-purple-500 text-2xl" />
            <span className="font-bold text-xl">Gamify</span>
          </div>

          <nav className="space-y-2">
            <Link
              to="/dashboard"
              className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700 text-purple-400"
            >
              <FaHome />
              <span>Dashboard</span>
            </Link>
            <Link
              to="/dashboard/profile"
              className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700 text-gray-300"
            >
              <FaUser />
              <span>Profile</span>
            </Link>
            <button
              onClick={() => logout()}
              className="w-full flex items-center space-x-2 p-2 rounded hover:bg-gray-700 text-gray-300"
            >
              <FaSignOutAlt />
              <span>Logout</span>
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="ml-64 flex-1 p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">
              Welcome back, {user?.username}
            </h1>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
                {user?.username?.charAt(0).toUpperCase()}
              </div>
              <span>{user?.username}</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-gray-400 mb-2">Games Played</h3>
              <p className="text-3xl font-bold">24</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-gray-400 mb-2">Achievements</h3>
              <p className="text-3xl font-bold">5</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-gray-400 mb-2">Friends Online</h3>
              <p className="text-3xl font-bold">12</p>
            </div>
          </div>

          {/* Activity */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {[
                {
                  id: 1,
                  game: "Cloud Runner",
                  action: "completed level 5",
                  time: "2 hours ago",
                },
                {
                  id: 2,
                  game: "Micro Quest",
                  action: "earned 100 points",
                  time: "5 hours ago",
                },
                {
                  id: 3,
                  game: "Space Adventure",
                  action: "unlocked new character",
                  time: "1 day ago",
                },
              ].map((a) => (
                <div
                  key={a.id}
                  className="flex items-center space-x-4 p-3 hover:bg-gray-700 rounded"
                >
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <FaGamepad className="text-purple-400" />
                  </div>
                  <div>
                    <p className="font-medium">{a.game}</p>
                    <p className="text-sm text-gray-400">
                      {a.action} • {a.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition">
              Start New Game
            </button>
            <button className="px-6 py-3 border border-purple-500 hover:bg-gray-800 rounded-lg transition">
              Invite Friends
            </button>
            <button className="px-6 py-3 border border-gray-600 hover:bg-gray-800 rounded-lg transition">
              View Leaderboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
