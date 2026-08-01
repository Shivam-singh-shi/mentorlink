import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTelegram,
  FaVideo,
  FaTimes,
  FaArrowRight,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaUnlock,
  FaCheckCircle,
} from "react-icons/fa";
import api from "../../services/api";

const FreeTrialModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);       // 1 = details form | 2 = telegram unlock | 3 = links
  const [loading, setLoading] = useState(false);
  const [alreadyUsed, setAlreadyUsed] = useState(false);
  const [error, setError] = useState("");
  const [paymentId, setPaymentId] = useState(null);

  // Telegram unlock state (Step 2 → Step 3)
  const [tgInput, setTgInput] = useState("");
  const [tgSaving, setTgSaving] = useState(false);
  const [tgError, setTgError] = useState("");
  const [tgSaved, setTgSaved] = useState(false);  // true once saved, links unlock

  // Pre-fill from localStorage
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
    email: storedUser?.email || "",
    phone: storedUser?.phone || "",
  });

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setError("");
  };

  // Step 1 → register free trial (no telegram yet)
  const handleSubmit = async () => {
    if (!form.name.trim()) return setError("Apna naam daalo");
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      return setError("Valid email daalo");

    setLoading(true);
    setError("");

    try {
      const { data } = await api.post("/payment/free-trial", {
        userName: form.name.trim(),
        userEmail: form.email.trim(),
        userPhone: form.phone.trim() || "—",
        telegramUsername: "",   // will be updated in step 2
      });

      if (data && data.success) {
        setPaymentId(data.paymentId);
        setStep(2);             // go to telegram username step
      } else {
        setError(data?.message || "Kuch galat hua. Dobara try karo.");
      }
    } catch (err) {
      if (err?.response?.status === 409) {
        setAlreadyUsed(true);
      } else {
        setError(err?.response?.data?.message || "Register nahi hua. Try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  // Step 2 → save telegram username → unlock links (Step 3)
  const handleSaveTelegram = async () => {
    if (!tgInput.trim()) return setTgError("Telegram username daalo");

    setTgSaving(true);
    setTgError("");

    try {
      await api.post("/payment/save-telegram", {
        paymentId,
        telegramUsername: tgInput.trim(),
      });
      setTgSaved(true);         // links unlock
    } catch {
      setTgError("Save nahi hua. Dobara try karo.");
    } finally {
      setTgSaving(false);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setAlreadyUsed(false);
      setError("");
      setPaymentId(null);
      setTgInput("");
      setTgSaving(false);
      setTgError("");
      setTgSaved(false);
      setForm({
        name: storedUser?.fullName || storedUser?.name || "",
        email: storedUser?.email || "",
        phone: storedUser?.phone || "",
      });
    }, 300);
  };

  if (!isOpen) return null;

  const stepLabel =
    step === 1 ? "Step 1 of 2 — Your Details"
    : "Step 2 of 2 — Enter Telegram Username";

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
                <span className="text-3xl">
                  {tgSaved ? "🚀" : step === 1 ? "🎁" : "📱"}
                </span>
              </motion.div>

              <h2 className="text-xl font-extrabold text-white relative z-10">
                {tgSaved
                  ? "Sab Ready Hai! 🎉"
                  : step === 1
                  ? "Free Trial Claim Karo"
                  : "Telegram Username Daalo"}
              </h2>
              <p className="text-white/75 text-sm mt-1 relative z-10">
                {tgSaved
                  ? "Neeche links join karo"
                  : step === 1
                  ? "Pehla mentorship session — bilkul FREE"
                  : "Group join karne ke liye zaroori hai"}
              </p>

              {/* Step indicator dots */}
              {!alreadyUsed && !tgSaved && (
                <div className="flex items-center justify-center gap-2 mt-4 relative z-10">
                  <div className={`h-2 rounded-full transition-all duration-300 ${step === 1 ? "w-6 bg-white" : "w-2 bg-white/40"}`} />
                  <div className={`h-2 rounded-full transition-all duration-300 ${step === 2 ? "w-6 bg-white" : "w-2 bg-white/40"}`} />
                </div>
              )}
            </div>

            {/* Step label */}
            {!alreadyUsed && !tgSaved && (
              <div className="bg-zinc-900/80 px-6 py-2 border-b border-white/5">
                <p className="text-xs text-gray-500 text-center font-medium tracking-wide">{stepLabel}</p>
              </div>
            )}

            <div className="p-6">
              <AnimatePresence mode="wait">

                {/* ── STEP 1 : Details Form ── */}
                {step === 1 && !alreadyUsed && (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.22 }}
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
                        className="w-full bg-zinc-900 border border-zinc-700 focus:border-emerald-400 text-white rounded-xl pl-10 pr-4 py-3 outline-none transition placeholder-gray-600 text-sm"
                      />
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <FaEnvelope className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 text-sm" />
                      <input
                        id="ft-email"
                        type="email"
                        placeholder="Email Address *"
                        value={form.email}
                        onChange={handleChange("email")}
                        className="w-full bg-zinc-900 border border-zinc-700 focus:border-emerald-400 text-white rounded-xl pl-10 pr-4 py-3 outline-none transition placeholder-gray-600 text-sm"
                      />
                    </div>

                    {/* Phone */}
                    <div className="relative">
                      <FaPhone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 text-sm" />
                      <input
                        id="ft-phone"
                        type="tel"
                        placeholder="Phone Number (optional)"
                        value={form.phone}
                        onChange={handleChange("phone")}
                        className="w-full bg-zinc-900 border border-zinc-700 focus:border-emerald-400 text-white rounded-xl pl-10 pr-4 py-3 outline-none transition placeholder-gray-600 text-sm"
                      />
                    </div>

                    {error && (
                      <p className="text-red-400 text-sm text-center font-medium">❌ {error}</p>
                    )}

                    <motion.button
                      id="ft-next"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={handleSubmit}
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-emerald-400 to-teal-500 text-black font-extrabold py-3.5 rounded-2xl flex items-center justify-center gap-2 mt-1 disabled:opacity-60 cursor-pointer shadow-lg shadow-emerald-500/20"
                    >
                      {loading ? (
                        <>
                          <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          Register ho raha hai...
                        </>
                      ) : (
                        <>Aage Badho <FaArrowRight /></>
                      )}
                    </motion.button>
                  </motion.div>
                )}

                {/* ── Already Used ── */}
                {alreadyUsed && (
                  <motion.div
                    key="used"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-4 py-4"
                  >
                    <div className="text-5xl">⚠️</div>
                    <h3 className="text-white font-bold text-lg">Free Trial Pehle Le Chuke Ho</h3>
                    <p className="text-gray-400 text-sm">
                      Is email se free trial pehle hi use ho chuka hai. Koi paid plan choose karo aur mentorship continue karo!
                    </p>
                    <button
                      onClick={handleClose}
                      className="w-full bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold py-3 rounded-2xl cursor-pointer"
                    >
                      Paid Plans Dekho
                    </button>
                  </motion.div>
                )}

                {/* ── STEP 2 : Telegram Username + Links ── */}
                {step === 2 && !alreadyUsed && (
                  <motion.div
                    key="telegram"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.22 }}
                    className="space-y-4"
                  >
                    {/* Username input box */}
                    {!tgSaved ? (
                      <div className="bg-zinc-900 border border-emerald-400/30 rounded-2xl p-4 space-y-3">
                        <div className="flex items-center gap-2 mb-1">
                          <FaLock className="text-amber-400 text-sm" />
                          <p className="text-white font-bold text-sm">
                            Pehle Telegram Username Daalo
                          </p>
                        </div>
                        <p className="text-gray-400 text-xs">
                          Taaki mentor tumhe group mein approve kar sake. Username daale bina links nahi milenge.
                        </p>

                        <div className="relative">
                          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#229ED9] font-bold text-sm">@</span>
                          <input
                            id="ft-telegram-input"
                            type="text"
                            placeholder="your_telegram_username"
                            value={tgInput}
                            onChange={(e) => {
                              setTgInput(e.target.value.replace("@", ""));
                              setTgError("");
                            }}
                            onKeyDown={(e) => e.key === "Enter" && handleSaveTelegram()}
                            className="w-full bg-zinc-800 border border-zinc-600 focus:border-emerald-400 text-white rounded-xl pl-10 pr-4 py-3 outline-none transition placeholder-gray-500 text-sm"
                          />
                        </div>

                        <div className="bg-zinc-800/60 rounded-lg px-3 py-2">
                          <p className="text-gray-500 text-xs text-center">
                            💡 Telegram app → Settings → Username
                          </p>
                        </div>

                        {tgError && (
                          <p className="text-red-400 text-sm text-center">❌ {tgError}</p>
                        )}

                        <motion.button
                          id="ft-save-tg"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={handleSaveTelegram}
                          disabled={tgSaving || !tgInput.trim()}
                          className="w-full bg-gradient-to-r from-emerald-400 to-teal-500 text-black font-extrabold py-3 rounded-xl flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                        >
                          {tgSaving ? (
                            <>
                              <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                              Save ho raha hai...
                            </>
                          ) : (
                            <><FaUnlock /> Username Save Karo & Links Unlock Karo</>
                          )}
                        </motion.button>
                      </div>
                    ) : (
                      /* Username saved — show success badge */
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-3 flex items-center gap-3"
                      >
                        <FaCheckCircle className="text-emerald-400 text-xl shrink-0" />
                        <div>
                          <p className="text-emerald-400 font-bold text-sm">Username Save Ho Gaya! 🎉</p>
                          <p className="text-gray-400 text-xs">@{tgInput} — Mentor approve karega 24 hrs mein</p>
                        </div>
                      </motion.div>
                    )}

                    {/* Links — Telegram locked until tgSaved, Meet always open */}
                    <div className="space-y-3">
                      <p className="text-gray-400 text-xs text-center uppercase tracking-widest font-semibold">
                        {tgSaved ? "Apna Group Join Karo 👇" : "Links — Username ke baad unlock honge"}
                      </p>

                      {/* JEE Group */}
                      <div className="relative">
                        <motion.a
                          id="ft-jee-link"
                          href={tgSaved ? "https://t.me/satyamiitkgp" : undefined}
                          onClick={(e) => !tgSaved && e.preventDefault()}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={tgSaved ? { scale: 1.03 } : {}}
                          whileTap={tgSaved ? { scale: 0.97 } : {}}
                          className={`flex items-center justify-between w-full font-bold py-4 px-5 rounded-2xl transition-all ${
                            tgSaved
                              ? "bg-[#229ED9] hover:bg-[#1b8eca] text-white shadow-lg cursor-pointer"
                              : "bg-zinc-800/50 text-gray-500 border border-zinc-700/50 cursor-not-allowed select-none"
                          }`}
                        >
                          <span className="flex items-center gap-3">
                            {tgSaved ? <FaTelegram size={20} /> : <FaLock size={16} />}
                            JEE / IIT Preparation Group
                          </span>
                          <FaArrowRight className="opacity-60" />
                        </motion.a>
                        {!tgSaved && (
                          <div className="absolute inset-0 flex items-center justify-center rounded-2xl pointer-events-none">
                            <span className="bg-zinc-900/70 text-gray-400 text-xs px-3 py-1 rounded-full border border-zinc-600">
                              🔒 Username daalo pehle
                            </span>
                          </div>
                        )}
                      </div>

                      {/* NEET Group */}
                      <div className="relative">
                        <motion.a
                          id="ft-neet-link"
                          href={tgSaved ? "https://t.me/satyamiitkgpp" : undefined}
                          onClick={(e) => !tgSaved && e.preventDefault()}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={tgSaved ? { scale: 1.03 } : {}}
                          whileTap={tgSaved ? { scale: 0.97 } : {}}
                          className={`flex items-center justify-between w-full font-bold py-4 px-5 rounded-2xl transition-all ${
                            tgSaved
                              ? "bg-[#1a7ab5] hover:bg-[#155e8a] text-white shadow-lg cursor-pointer"
                              : "bg-zinc-800/50 text-gray-500 border border-zinc-700/50 cursor-not-allowed select-none"
                          }`}
                        >
                          <span className="flex items-center gap-3">
                            {tgSaved ? <FaTelegram size={20} /> : <FaLock size={16} />}
                            NEET Preparation Group
                          </span>
                          <FaArrowRight className="opacity-60" />
                        </motion.a>
                        {!tgSaved && (
                          <div className="absolute inset-0 flex items-center justify-center rounded-2xl pointer-events-none">
                            <span className="bg-zinc-900/70 text-gray-400 text-xs px-3 py-1 rounded-full border border-zinc-600">
                              🔒 Username daalo pehle
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Google Meet — always accessible */}
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
                    </div>

                    {/* Note */}
                    {tgSaved && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-amber-400/10 border border-amber-400/25 rounded-xl p-3 text-center"
                      >
                        <p className="text-amber-300 text-xs leading-relaxed">
                          📌 Telegram approval manual hai — Satyam bhai <strong>24 ghante</strong> ke andar approve karega
                        </p>
                      </motion.div>
                    )}

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
