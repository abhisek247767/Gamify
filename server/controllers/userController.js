export const getProfile = async (req, res) => {
  try {
    res.json({ success: true, message: "Protected data", user: req.user });
  } catch (err) {
    console.error("Protected route error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
