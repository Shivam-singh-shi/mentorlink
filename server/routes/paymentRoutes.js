import express from "express";
import dotenv from "dotenv";
import Razorpay from "razorpay";
import crypto from "crypto";
import Payment from "../models/Payment.js";

dotenv.config();

const router = express.Router();

// Razorpay Instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// =========================
// CREATE ORDER
// =========================
router.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    if (amount === undefined || amount === null) {
      return res.status(400).json({
        success: false,
        message: "Amount is required",
      });
    }

    const options = {
      amount: Number(amount) * 100, // ₹9 -> 900 paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    console.error("Create Order Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// =========================
// VERIFY PAYMENT
// =========================
router.post("/verify", async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      userName,
      userEmail,
      userPhone,
      planTitle,
      amount,
    } = req.body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: "Missing payment details",
      });
    }

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    if (expectedSignature === razorpay_signature) {
      // Calculate expiry date based on plan title
      const PLAN_DURATIONS = {
        "1 Day": 1,
        "1 Week": 7,
        "1 Month": 30,
        "6 Months": 180,
        "1 Year": 365,
      };
      const durationDays = PLAN_DURATIONS[planTitle] || 30;
      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + durationDays);

      // Save payment to database
      const newPayment = await Payment.create({
        userName: userName || "Student",
        userEmail: userEmail || "student@example.com",
        userPhone: userPhone || "—",
        planTitle: planTitle || "Mentorship Session",
        amount: amount || 0,
        razorpayOrderId: razorpay_order_id,
        razorpayPaymentId: razorpay_payment_id,
        status: "Success",
        durationDays,
        expiryDate,
      });

      return res.status(200).json({
        success: true,
        message: "Payment Verified Successfully",
        payment: newPayment,
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id,
        expiryDate,
        durationDays,
      });
    }

    return res.status(400).json({
      success: false,
      message: "Invalid Signature",
    });
  } catch (error) {
    console.error("Verification Error:", error);

    res.status(500).json({
      success: false,
      message: "Verification Failed",
    });
  }
});

export default router;
