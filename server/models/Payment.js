import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    userName: {
      type: String,
      required: true,
      default: "Student",
    },
    userEmail: {
      type: String,
      required: true,
    },
    userPhone: {
      type: String,
      default: "—",
    },
    planTitle: {
      type: String,
      default: "Mentorship Session",
    },
    amount: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      default: "INR",
    },
    razorpayOrderId: {
      type: String,
      required: true,
    },
    razorpayPaymentId: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Success", "Failed"],
      default: "Success",
    },
    durationDays: {
      type: Number,
      default: 0,
    },
    expiryDate: {
      type: Date,
    },
    telegramUsername: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;
