import { useAuth } from "../Context/AuthContext.jsx";
import { FaUser, FaEnvelope, FaKey } from "react-icons/fa";

export const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="ml-64 flex-1 p-8">
        <h1 className="text-2xl font-bold mb-8">Your Profile</h1>

        <div className="bg-gray-800 rounded-lg p-6 max-w-2xl">
          <div className="flex items-center space-x-6 mb-8">
            <div className="w-20 h-20 rounded-full bg-purple-500 flex items-center justify-center text-3xl font-bold">
              {user?.username?.charAt(0).toUpperCase()}
            </div>
            <div>
              <h2 className="text-xl font-bold">{user?.username}</h2>
              <p className="text-gray-400">
                Member since {new Date().getFullYear()}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="pt-1">
                <FaUser className="text-purple-500" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Username</h3>
                <p className="text-gray-300">{user?.username}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="pt-1">
                <FaEnvelope className="text-purple-500" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Email</h3>
                <p className="text-gray-300">{user?.email}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="pt-1">
                <FaKey className="text-purple-500" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Password</h3>
                <button className="text-purple-400 hover:underline">
                  Change Password
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-700">
            <button className="px-6 py-2 border border-red-500 text-red-400 hover:bg-red-500/10 rounded-lg transition">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
