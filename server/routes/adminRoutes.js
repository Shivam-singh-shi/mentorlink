import express from "express";
import User from "../models/User.js";
import Contact from "../models/Contact.js";

const router = express.Router();

// Hardcoded admin credentials
const ADMIN_ID = "SatyamIIT123";
const ADMIN_PASSWORD = "SatyamIIT123";

// POST /api/admin/login
router.post("/login", (req, res) => {
  const { userId, password } = req.body;

  if (userId === ADMIN_ID && password === ADMIN_PASSWORD) {
    return res.json({ success: true, token: "admin-authenticated" });
  }

  return res.status(401).json({ success: false, message: "Invalid credentials" });
});

// GET /api/admin/stats  (protected by admin token header)
router.get("/stats", async (req, res) => {
  const adminToken = req.headers["x-admin-token"];

  if (adminToken !== "admin-authenticated") {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  try {
    const totalUsers = await User.countDocuments();
    const totalMessages = await Contact.countDocuments();

    const recentUsers = await User.find()
      .select("fullName email phone createdAt")
      .sort({ createdAt: -1 })
      .limit(10);

    const recentMessages = await Contact.find()
      .sort({ createdAt: -1 })
      .limit(10);

    res.json({
      success: true,
      stats: {
        totalUsers,
        totalMessages,
      },
      recentUsers,
      recentMessages,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
