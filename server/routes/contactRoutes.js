import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// POST /api/contact  — Save contact form submission
router.post("/", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Name, email and message are required" });
  }

  try {
    const contact = await Contact.create({ name, email, subject, message });
    res.status(201).json({ success: true, message: "Message sent successfully!", contact });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to send message" });
  }
});

export default router;
