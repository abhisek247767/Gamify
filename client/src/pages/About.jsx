import { Link } from "react-router-dom";
import {
  FaGithub,
  FaDiscord,
  FaStar,
  FaCodeBranch,
  FaUsers,
  FaShieldAlt,
  FaPuzzlePiece,
} from "react-icons/fa";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";

export const About = () => {
  const features = [
    {
      icon: <FaStar className="text-2xl" />,
      title: "Free & Open-Source",
      description:
        "MIT licensed and community-driven with transparent development",
      color: "text-yellow-400",
    },
    {
      icon: <FaPuzzlePiece className="text-2xl" />,
      title: "Multi-Platform",
      description: "Web dashboard, mobile-friendly, and Discord integration",
      color: "text-blue-400",
    },
    {
      icon: <FaUsers className="text-2xl" />,
      title: "Built for Teams",
      description: "Role-based collaboration and community features built-in",
      color: "text-pink-400",
    },
  ];

  const stats = [
    { value: "100%", label: "Open Source" },
    { value: "24/7", label: "Community Support" },
    { value: "1K+", label: "Active Users" },
    { value: "50+", label: "Contributors" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
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

  const cardVariants = {
    hover: {
      y: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-24 pb-20 px-4 overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
        </Canvas>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
          >
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Gamify
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Transforming productivity through the power of gamification
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                {stat.value}
              </div>
              <div className="text-gray-400 mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Section */}
        <motion.div
          variants={itemVariants}
          className="bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-gray-700/50 mb-12"
        >
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Our Mission
          </h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Gamify is revolutionizing how we approach productivity,
              collaboration, and community engagement through the power of
              gamification. We believe that by applying game mechanics to
              everyday activities, we can make them more engaging, rewarding,
              and ultimately more effective.
            </p>
            <p>
              Our platform is built on principles of transparency, community,
              and innovation. We're committed to creating tools that empower
              individuals and teams to achieve their goals while having fun in
              the process.
            </p>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div variants={containerVariants} className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Why Choose Gamify?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className={`${feature.color} mb-4`}>{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
