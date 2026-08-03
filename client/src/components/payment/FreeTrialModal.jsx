import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTelegram,
  FaVideo,
  FaTimes,
  FaArrowRight,
  FaUser,
  FaPhone,
} from "react-icons/fa";
import api from "../../services/api";

const FreeTrialModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getStoredUser = () => {
    try {
      const u = localStorage.getItem("user");
      return u ? JSON.parse(u) : null;
    } catch {
      return null;
    }
  };
  const storedUser = getStoredUser();

  const [form, setForm] = useState({
    name: storedUser?.fullName || storedUser?.name || "",
    phone: storedUser?.phone || "",
  });

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setError("");
  };

  const handleSubmit = async () => {
    if (!form.name.trim()) return setError("Apna naam daalo");
    if (!form.phone.trim()) return setError("Phone number daalo");

    setLoading(true);
    setError("");

    try {
      await api.post("/payment/free-trial", {
        userName: form.name.trim(),
        userPhone: form.phone.trim(),
      });
      setSubmitted(true);
    } catch (err) {
      // Even if already used / error — still show links
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setError("");
      setLoading(false);
      setForm({
        name: storedUser?.fullName || storedUser?.name || "",
        phone: storedUser?.phone || "",
      });
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 40 }}
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
            className="relative w-full max-w-md bg-[#111118] border border-zinc-700/60 rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition z-10 cursor-pointer"
            >
              <FaTimes size={18} />
            </button>

            {/* Header */}
            <div className="bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 p-7 text-center relative overflow-hidden">
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />

              <motion.div
                initial={{ scale: 0, rotate: -15 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.15, type: "spring", stiffness: 220 }}
                className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg relative z-10"
              >
                <span className="text-3xl">{submitted ? "🚀" : "🎁"}</span>
              </motion.div>

              <h2 className="text-xl font-extrabold text-white relative z-10">
                {submitted ? "Links Ready Hain! 🎉" : "Free Trial Claim Karo"}
              </h2>
              <p className="text-white/75 text-sm mt-1 relative z-10">
                {submitted
                  ? "Neeche group join karo — bilkul free!"
                  : "Pehla mentorship session — bilkul FREE"}
              </p>
            </div>

            <div className="p-6">
              <AnimatePresence mode="wait">

                {/* ── STEP 1: Simple Form ── */}
                {!submitted && (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3"
                  >
                    {/* Name */}
                    <div className="relative">
                      <FaUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 text-sm" />
                      <input
                        id="ft-name"
                        type="text"
                        placeholder="Apna Poora Naam *"
                        value={form.name}
                        onChange={handleChange("name")}
                        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                        className="w-full bg-zinc-900 border border-zinc-700 focus:border-emerald-400 text-white rounded-xl pl-10 pr-4 py-3 outline-none transition placeholder-gray-600 text-sm"
                      />
                    </div>

                    {/* Phone */}
                    <div className="relative">
                      <FaPhone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 text-sm" />
                      <input
                        id="ft-phone"
                        type="tel"
                        placeholder="Phone Number *"
                        value={form.phone}
                        onChange={handleChange("phone")}
                        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                        className="w-full bg-zinc-900 border border-zinc-700 focus:border-emerald-400 text-white rounded-xl pl-10 pr-4 py-3 outline-none transition placeholder-gray-600 text-sm"
                      />
                    </div>

                    {error && (
                      <p className="text-red-400 text-sm text-center font-medium">
                        ❌ {error}
                      </p>
                    )}

                    <motion.button
                      id="ft-submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={handleSubmit}
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-emerald-400 to-teal-500 text-black font-extrabold py-3.5 rounded-2xl flex items-center justify-center gap-2 mt-1 disabled:opacity-60 cursor-pointer shadow-lg shadow-emerald-500/20"
                    >
                      {loading ? (
                        <>
                          <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          Saving...
                        </>
                      ) : (
                        <>Links Dekho <FaArrowRight /></>
                      )}
                    </motion.button>
                  </motion.div>
                )}

                {/* ── STEP 2: Direct Links ── */}
                {submitted && (
                  <motion.div
                    key="links"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3"
                  >
                    <p className="text-gray-400 text-xs text-center uppercase tracking-widest font-semibold">
                      Apna Group Choose Karo 👇
                    </p>

                    {/* JEE Group */}
                    <motion.a
                      id="ft-jee-link"
                      href="https://t.me/satyamiitkgp"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center justify-between w-full font-bold py-4 px-5 rounded-2xl bg-[#229ED9] hover:bg-[#1b8eca] text-white shadow-lg cursor-pointer transition-all"
                    >
                      <span className="flex items-center gap-3">
                        <FaTelegram size={22} />
                        JEE / IIT Preparation Group
                      </span>
                      <FaArrowRight className="opacity-80" />
                    </motion.a>

                    {/* NEET Group */}
                    <motion.a
                      id="ft-neet-link"
                      href="https://t.me/satyamiitkgpp"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center justify-between w-full font-bold py-4 px-5 rounded-2xl bg-[#1a7ab5] hover:bg-[#155e8a] text-white shadow-lg cursor-pointer transition-all"
                    >
                      <span className="flex items-center gap-3">
                        <FaTelegram size={22} />
                        NEET Preparation Group
                      </span>
                      <FaArrowRight className="opacity-80" />
                    </motion.a>

                    {/* Google Meet */}
                    <motion.a
                      id="ft-meet-link"
                      href="https://meet.google.com/emg-thxv-sgj"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center justify-between w-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 text-white font-bold py-4 px-5 rounded-2xl transition-all cursor-pointer"
                    >
                      <span className="flex items-center gap-3">
                        <FaVideo size={20} className="text-green-400" />
                        Join Google Meet Session
                      </span>
                      <FaArrowRight className="opacity-60" />
                    </motion.a>

                    {/* Note */}
                    <div className="bg-amber-400/10 border border-amber-400/25 rounded-xl p-3 text-center">
                      <p className="text-amber-300 text-xs leading-relaxed">
                        📌 Group join karo aur Satyam bhai se <strong>personal guidance</strong> lo — bilkul free!
                      </p>
                    </div>

                    <button
                      onClick={handleClose}
                      className="w-full text-gray-500 hover:text-gray-300 text-sm py-1.5 transition cursor-pointer"
                    >
                      Close
                    </button>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default FreeTrialModal;
