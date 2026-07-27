import express from "express";
import {
  addMentor,
  getAllMentors,
  getMentorById,
  updateMentor,
  deleteMentor,
} from "../controllers/mentorController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// ===============================
// Mentor Routes
// ===============================

// Add Mentor
router.post("/", protect, addMentor);

// Get All Mentors
router.get("/", getAllMentors);

// Get Mentor By ID
router.get("/:id", getMentorById);

// Update Mentor
router.put("/:id", protect, updateMentor);

// Delete Mentor
router.delete("/:id", protect, deleteMentor);

export default router;
