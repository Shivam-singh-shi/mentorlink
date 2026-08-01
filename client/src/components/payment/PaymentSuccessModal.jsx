import { motion, AnimatePresence } from "framer-motion";
import { FaTelegram, FaVideo, FaClock, FaCheckCircle, FaTimes } from "react-icons/fa";

const PaymentSuccessModal = ({ isOpen, onClose, planTitle, amount, expiryDate, durationDays }) => {
  if (!isOpen) return null;

  const formattedExpiry = expiryDate
    ? new Date(expiryDate).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

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
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-8 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
              >
                <FaCheckCircle className="text-green-500 text-4xl" />
              </motion.div>
              <h2 className="text-2xl font-bold text-black">Payment Successful! 🎉</h2>
              <p className="text-black/70 mt-1 font-medium">Welcome to {planTitle} Plan</p>
            </div>

            {/* Body */}
            <div className="p-6 space-y-4">
              {/* Plan Info */}
              <div className="bg-zinc-800 rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Amount Paid</p>
                  <p className="text-white font-bold text-xl">₹{amount}</p>
                </div>
                {formattedExpiry && (
                  <div className="text-right">
                    <p className="text-gray-400 text-sm flex items-center gap-1 justify-end">
                      <FaClock className="text-yellow-400" /> Expires On
                    </p>
                    <p className="text-yellow-400 font-semibold text-sm">{formattedExpiry}</p>
                  </div>
                )}
              </div>

              <p className="text-gray-300 text-center text-sm">
                Join your exam group & Google Meet for mentorship sessions!
              </p>

              {/* JEE Telegram Button */}
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

              {/* NEET Telegram Button */}
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

              {/* Google Meet Button */}
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

              {/* Note */}
              <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-xl p-3 text-center">
                <p className="text-yellow-300 text-xs">
                  📌 Telegram approval is manual — Satyam will approve you within <strong>24 hours</strong>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PaymentSuccessModal;
