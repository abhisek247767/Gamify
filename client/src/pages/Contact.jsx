import { useState, useRef, useEffect } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaGithub,
  FaDiscord,
  FaTwitter,
  FaLinkedin,
  FaPaperPlane,
  FaCheckCircle,
  FaSpinner,
} from "react-icons/fa";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";


export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [hoveredField, setHoveredField] = useState(null);
  const formRef = useRef();

  // 3D shape variants
  const shapes = [
    { color: "#8B5CF6", position: [0, 0, 0], size: [1, 1, 1] },
    { color: "#EC4899", position: [2, 1, -1], size: [0.8, 0.8, 0.8] },
    { color: "#3B82F6", position: [-2, -1, 1], size: [0.6, 0.6, 0.6] },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Using EmailJS for actual email sending
      await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      );

      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Failed to send message:", error);
      setErrors({ submit: "Failed to send message. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const fieldVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.02 },
    focus: { scale: 1.02, boxShadow: "0 0 0 2px rgba(139, 92, 246, 0.5)" },
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-24 pb-20 px-4 overflow-hidden">
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
          {/* {shapes.map((shape, index) => (
            <mesh key={index} position={shape.position}>
              <boxGeometry args={shape.size} />
              <meshStandardMaterial
                color={shape.color}
                emissive={shape.color}
                emissiveIntensity={0.2}
              />
            </mesh>
          ))} */}
        </Canvas>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
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
            Let's Connect
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            We'd love to hear from you! Whether you have a question, feedback,
            or just want to say hello.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-gray-700/50"
          >
            <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Send Us a Message
            </h2>

            <AnimatePresence>
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mb-6 p-4 bg-green-900/50 border border-green-500 rounded-lg flex items-center"
                >
                  <FaCheckCircle className="text-green-400 mr-3 text-xl" />
                  <div>
                    <h3 className="font-semibold text-green-100">
                      Message Sent!
                    </h3>
                    <p className="text-green-200 text-sm">
                      We'll get back to you soon.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                variants={fieldVariants}
                animate={hoveredField === "name" ? "hover" : "rest"}
                onHoverStart={() => setHoveredField("name")}
                onHoverEnd={() => setHoveredField(null)}
              >
                <label
                  htmlFor="name"
                  className="block mb-2 text-gray-300 font-medium"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-5 py-3 bg-gray-700/50 border ${
                    errors.name ? "border-red-500" : "border-gray-600"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-1 text-red-400 text-sm">{errors.name}</p>
                )}
              </motion.div>

              <motion.div
                variants={fieldVariants}
                animate={hoveredField === "email" ? "hover" : "rest"}
                onHoverStart={() => setHoveredField("email")}
                onHoverEnd={() => setHoveredField(null)}
              >
                <label
                  htmlFor="email"
                  className="block mb-2 text-gray-300 font-medium"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-5 py-3 bg-gray-700/50 border ${
                    errors.email ? "border-red-500" : "border-gray-600"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-red-400 text-sm">{errors.email}</p>
                )}
              </motion.div>

              <motion.div
                variants={fieldVariants}
                animate={hoveredField === "message" ? "hover" : "rest"}
                onHoverStart={() => setHoveredField("message")}
                onHoverEnd={() => setHoveredField(null)}
              >
                <label
                  htmlFor="message"
                  className="block mb-2 text-gray-300 font-medium"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-5 py-3 bg-gray-700/50 border ${
                    errors.message ? "border-red-500" : "border-gray-600"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300`}
                  placeholder="What would you like to say?"
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-red-400 text-sm">{errors.message}</p>
                )}
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full px-6 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300 ${
                  isSubmitting
                    ? "bg-purple-700 cursor-not-allowed"
                    : "bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {errors.submit && (
                <p className="text-red-400 text-center">{errors.submit}</p>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-gray-700/50"
          >
            <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Contact Information
            </h2>

            <div className="space-y-8">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start space-x-6 p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all duration-300"
              >
                <div className="p-3 bg-purple-500/10 rounded-lg">
                  <FaEnvelope className="text-2xl text-purple-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-100 mb-1">
                    Email Us
                  </h3>
                  <a
                    href="mailto:contact@gamify.example"
                    className="text-purple-300 hover:text-purple-200 transition-colors duration-300"
                  >
                    contact@gamify.example
                  </a>
                  <p className="text-gray-400 text-sm mt-2">
                    Typically respond within 24 hours
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start space-x-6 p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all duration-300"
              >
                <div className="p-3 bg-pink-500/10 rounded-lg">
                  <FaMapMarkerAlt className="text-2xl text-pink-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-100 mb-1">
                    Our Location
                  </h3>
                  <p className="text-gray-300">
                    Remote-first team with contributors worldwide
                  </p>
                  <button className="mt-3 text-sm text-purple-300 hover:text-purple-200 transition-colors duration-300 flex items-center">
                    View on map <span className="ml-1">→</span>
                  </button>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start space-x-6 p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all duration-300"
              >
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <FaDiscord className="text-2xl text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-100 mb-1">
                    Community Support
                  </h3>
                  <p className="text-gray-300 mb-3">
                    Join our active community for real-time support and
                    discussions
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors duration-300"
                  >
                    <FaDiscord className="mr-2" /> Join Discord
                  </a>
                </div>
              </motion.div>
            </div>

          
           
          </motion.div>
        </div>
      </div>
    </section>
  );
};
