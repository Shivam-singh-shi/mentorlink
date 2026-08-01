import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTelegram, FaVideo, FaClock, FaCheckCircle, FaTimes, FaArrowRight } from "react-icons/fa";
import api from "../../services/api";

const PaymentSuccessModal = ({ isOpen, onClose, planTitle, amount, expiryDate, durationDays, paymentId }) => {
  const isFreeTrial = amount === 0 || planTitle === "🎁 Free Trial";
  const [step, setStep] = useState(1); // Step 1: Enter Telegram | Step 2: Show Links
  const [telegramUsername, setTelegramUsername] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const formattedExpiry = expiryDate
    ? new Date(expiryDate).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  const handleSaveTelegram = async () => {
    if (!telegramUsername.trim()) {
      setError("Please enter your Telegram username");
      return;
    }
    setSaving(true);
    setError("");
    try {
      await api.post("/payment/save-telegram", {
        paymentId,
        telegramUsername: telegramUsername.trim(),
      });
      setStep(2);
    } catch (err) {
      setError("Failed to save. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const handleSkip = () => {
    setStep(2);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 40 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-md bg-zinc-900 border border-zinc-700 rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition z-10"
            >
              <FaTimes size={20} />
            </button>

            {/* Header */}
            <div className={`p-8 text-center ${isFreeTrial ? "bg-gradient-to-r from-emerald-400 to-teal-500" : "bg-gradient-to-r from-yellow-400 to-yellow-500"}`}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
              >
                {isFreeTrial ? (
                  <span className="text-4xl">🎁</span>
                ) : (
                  <FaCheckCircle className="text-green-500 text-4xl" />
                )}
              </motion.div>
              <h2 className="text-2xl font-bold text-black">
                {isFreeTrial ? "Free Trial Activated! 🎉" : "Payment Successful! 🎉"}
              </h2>
              <p className="text-black/70 mt-1 font-medium">
                {isFreeTrial ? "Your free session is ready" : `${planTitle} Plan Activated`}
              </p>
            </div>

            {/* Plan Info Bar */}
            <div className="bg-zinc-800 px-6 py-3 flex items-center justify-between">
              {isFreeTrial ? (
                <p className="text-emerald-400 font-bold">✅ FREE — No payment required</p>
              ) : (
                <p className="text-white font-bold">₹{amount} paid</p>
              )}
              {formattedExpiry && (
                <p className="text-yellow-400 text-sm flex items-center gap-1">
                  <FaClock size={12} /> Valid: {formattedExpiry}
                </p>
              )}
            </div>

            {/* Body */}
            <div className="p-6">
              {step === 1 ? (
                /* Step 1: Enter Telegram Username */
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <div className="text-center">
                    <FaTelegram className="text-[#229ED9] text-5xl mx-auto mb-3" />
                    <h3 className="text-white font-bold text-lg">Enter Your Telegram Username</h3>
                    <p className="text-gray-400 text-sm mt-1">
                      So your mentor knows who to approve in the group
                    </p>
                  </div>

                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">@</span>
                    <input
                      type="text"
                      placeholder="your_telegram_username"
                      value={telegramUsername}
                      onChange={(e) => {
                        setTelegramUsername(e.target.value.replace("@", ""));
                        setError("");
                      }}
                      className="w-full bg-zinc-800 border border-zinc-600 focus:border-yellow-400 text-white rounded-xl pl-9 pr-4 py-3.5 outline-none transition placeholder-gray-500"
                    />
                  </div>

                  {error && <p className="text-red-400 text-sm text-center">{error}</p>}

                  <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-xl p-3">
                    <p className="text-yellow-300 text-xs text-center">
                      💡 Telegram app → Settings → Username
                    </p>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSaveTelegram}
                    disabled={saving}
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-4 rounded-2xl flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {saving ? "Saving..." : <>Save & Get Access <FaArrowRight /></>}
                  </motion.button>

                  <button
                    onClick={handleSkip}
                    className="w-full text-gray-500 hover:text-gray-300 text-sm py-2 transition"
                  >
                    Skip for now →
                  </button>
                </motion.div>
              ) : (
                /* Step 2: Show Links */
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-3"
                >
                  <p className="text-gray-300 text-center text-sm mb-4">
                    {isFreeTrial
                      ? "Join the group & attend your FREE session on Google Meet! 🚀"
                      : "Join your exam group & Google Meet for mentorship! 🚀"}
                  </p>

                  {/* JEE Telegram */}
                  <motion.a
                    href="https://t.me/satyamiitkgp"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-3 w-full bg-[#229ED9] hover:bg-[#1a8bc4] text-white font-bold py-4 rounded-2xl transition-all shadow-lg"
                  >
                    <FaTelegram size={22} />
                    JEE/IIT Telegram Group
                  </motion.a>

                  {/* NEET Telegram */}
                  <motion.a
                    href="https://t.me/satyamiitkgpp"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-3 w-full bg-[#1a7ab5] hover:bg-[#155e8a] text-white font-bold py-4 rounded-2xl transition-all shadow-lg"
                  >
                    <FaTelegram size={22} />
                    NEET Telegram Group
                  </motion.a>

                  {/* Google Meet */}
                  <motion.a
                    href="https://meet.google.com/emg-thxv-sgj"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-3 w-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 text-white font-bold py-4 rounded-2xl transition-all"
                  >
                    <FaVideo size={22} className="text-green-400" />
                    Join Google Meet
                  </motion.a>

                  <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-xl p-3 text-center">
                    <p className="text-yellow-300 text-xs">
                      📌 Telegram approval is manual — Satyam will approve you within <strong>24 hours</strong>
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PaymentSuccessModal;
