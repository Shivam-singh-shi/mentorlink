import express from "express";

import {
  createBooking,
  getAllBookings,
  getBookingById,
  updateBooking,
  deleteBooking,
} from "../controllers/bookingController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Create Booking
router.post("/", protect, createBooking);

// Get All Bookings
router.get("/", protect, getAllBookings);

// Get Single Booking
router.get("/:id", getBookingById);

// Update Booking
router.put("/:id", protect, updateBooking);

// Delete Booking
router.delete("/:id", protect, deleteBooking);

export default router;
