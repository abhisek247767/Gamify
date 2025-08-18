import { useAuth } from "../Context/AuthContext.jsx";
import {
  FaGamepad,
  FaUser,
  FaSignOutAlt,
  FaHome,
  FaTrophy,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Dashboard = () => {
  const { user, logout } = useAuth();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white mt-13">
      <div className="flex">
        {/* Sidebar */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-72 bg-gray-800/50 backdrop-blur-lg min-h-screen p-6 fixed border-r border-gray-700/50"
        >
          <div className="flex items-center space-x-3 mb-10 p-2">
            <motion.div
              whileHover={{ rotate: 15 }}
              className="p-2 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg"
            >
              <FaGamepad className="text-white text-xl" />
            </motion.div>
            <span className="font-bold text-2xl bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent">
              Gamify
            </span>
          </div>

          <nav className="space-y-3">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/dashboard"
                className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-purple-900/50 to-indigo-900/20 border border-purple-500/20 shadow-lg shadow-purple-500/10 text-purple-300 font-medium"
              >
                <FaHome className="text-lg" />
                <span>Dashboard</span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/dashboard/profile"
                className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-700/50 border border-transparent hover:border-gray-600 transition-all duration-300 text-gray-300"
              >
                <FaUser className="text-lg" />
                <span>Profile</span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <button
                onClick={() => logout()}
                className="w-full flex items-center space-x-3 p-3 rounded-xl hover:bg-red-900/30 border border-transparent hover:border-red-500/30 transition-all duration-300 text-gray-300"
              >
                <FaSignOutAlt className="text-lg" />
                <span>Logout</span>
              </button>
            </motion.div>
          </nav>

          {/* Sidebar footer */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="p-4 bg-gray-800/70 rounded-xl border border-gray-700/50">
              <div className="text-xs text-gray-400 mb-1">Premium Member</div>
              <div className="h-2 bg-gray-700 rounded-full mb-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
                  style={{ width: "65%" }}
                ></div>
              </div>
              <div className="text-sm text-purple-300 font-medium">
                65% to next level
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="ml-72 flex-1 p-8">
          {/* Header */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-between items-center mb-8"
          >
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-indigo-200 bg-clip-text text-transparent">
                Welcome back, {user?.username}
              </h1>
              <p className="text-gray-400">
                Here's what's happening in your gaming world
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 rounded-full hover:bg-gray-700/50 transition-all">
                <IoMdNotifications className="text-xl" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-3 bg-gray-800/70 px-4 py-2 rounded-full border border-gray-700/50 cursor-pointer hover:bg-gray-700/80 transition-all">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center font-bold">
                  {user?.username?.charAt(0).toUpperCase()}
                </div>
                <span className="font-medium">{user?.username}</span>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          >
            <motion.div
              variants={itemVariants}
              className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 shadow-lg hover:shadow-purple-500/10"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-400">Games Played</h3>
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <FaGamepad className="text-purple-400" />
                </div>
              </div>
              <p className="text-4xl font-bold mb-2">24</p>
              <div className="text-sm text-green-400 flex items-center">
                <span>↑ 12% from last week</span>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50 hover:border-indigo-500/30 transition-all duration-300 shadow-lg hover:shadow-indigo-500/10"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-400">Achievements</h3>
                <div className="p-2 bg-indigo-500/10 rounded-lg">
                  <FaTrophy className="text-indigo-400" />
                </div>
              </div>
              <p className="text-4xl font-bold mb-2">5</p>
              <div className="text-sm text-yellow-400 flex items-center">
                <span>New achievement unlocked!</span>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 shadow-lg hover:shadow-blue-500/10"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-400">Friends Online</h3>
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <FaUsers className="text-blue-400" />
                </div>
              </div>
              <p className="text-4xl font-bold mb-2">12</p>
              <div className="text-sm text-blue-400 flex items-center">
                <span>3 playing together</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Activity */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50 mb-8 shadow-lg"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold bg-gradient-to-r from-purple-300 to-indigo-200 bg-clip-text text-transparent">
                Recent Activity
              </h2>
              <button className="text-sm text-purple-300 hover:text-purple-200 transition-colors">
                View All
              </button>
            </div>
            <div className="space-y-3">
              {[
                {
                  id: 1,
                  game: "Cloud Runner",
                  action: "completed level 5",
                  time: "2 hours ago",
                  icon: <FaGamepad className="text-purple-400" />,
                  color: "bg-purple-500/20",
                },
                {
                  id: 2,
                  game: "Micro Quest",
                  action: "earned 100 points",
                  time: "5 hours ago",
                  icon: <FaChartLine className="text-blue-400" />,
                  color: "bg-blue-500/20",
                },
                {
                  id: 3,
                  game: "Space Adventure",
                  action: "unlocked new character",
                  time: "1 day ago",
                  icon: <FaTrophy className="text-yellow-400" />,
                  color: "bg-yellow-500/20",
                },
              ].map((a) => (
                <motion.div
                  key={a.id}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="flex items-center space-x-4 p-4 hover:bg-gray-700/30 rounded-xl transition-all cursor-pointer"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${a.color} flex items-center justify-center`}
                  >
                    {a.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{a.game}</p>
                    <p className="text-sm text-gray-400">{a.action}</p>
                  </div>
                  <div className="text-sm text-gray-500">{a.time}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-xl transition-all shadow-lg shadow-purple-500/20 font-medium flex items-center space-x-2"
            >
              <FaGamepad />
              <span>Start New Game</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 bg-gray-800/50 border border-gray-700 hover:bg-gray-700/70 rounded-xl transition-all shadow-lg shadow-gray-500/10 font-medium flex items-center space-x-2"
            >
              <FaUsers />
              <span>Invite Friends</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 bg-gray-800/50 border border-gray-700 hover:bg-gray-700/70 rounded-xl transition-all shadow-lg shadow-gray-500/10 font-medium flex items-center space-x-2"
            >
              <FaTrophy />
              <span>View Leaderboard</span>
            </motion.button>
          </motion.div>

          {/* Featured Game */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 bg-gradient-to-r from-purple-900/30 to-indigo-900/30 p-6 rounded-2xl border border-purple-500/20 shadow-lg shadow-purple-500/10"
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-4 md:mb-0">
                <div className="w-full h-40 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <FaGamepad className="text-4xl text-white" />
                </div>
              </div>
              <div className="md:w-2/3 md:pl-6">
                <h3 className="text-xl font-bold mb-2">
                  Featured Game: Neon Rush
                </h3>
                <p className="text-gray-300 mb-4">
                  Experience the thrill of high-speed racing in futuristic neon
                  cities. Unlock special rewards this week!
                </p>
                <button className="px-6 py-2 bg-white text-gray-900 hover:bg-gray-200 rounded-lg font-medium transition-all">
                  Play Now
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
