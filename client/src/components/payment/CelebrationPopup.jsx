import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaRocket, FaTelegram, FaVideo } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

/* ─────────────────────────────────────────────────────
   Canvas confetti (no extra deps needed)
───────────────────────────────────────────────────── */
const COLORS = [
  "#FFD700", "#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4",
  "#FFEAA7", "#DDA0DD", "#98FB98", "#FF9FF3", "#54A0FF",
  "#FF6348", "#00D2D3", "#FFA502", "#2ED573", "#FF4757",
];

function useConfetti(active) {
  const canvasRef = useRef(null);
  const animRef   = useRef(null);
  const pieces    = useRef([]);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    pieces.current = Array.from({ length: 200 }, () => ({
      x:         Math.random() * canvas.width,
      y:         Math.random() * canvas.height - canvas.height,
      w:         Math.random() * 12 + 6,
      h:         Math.random() * 6 + 4,
      color:     COLORS[Math.floor(Math.random() * COLORS.length)],
      tilt:      Math.random() * 360,
      tiltSpeed: Math.random() * 4 - 2,
      speed:     Math.random() * 4 + 2,
      opacity:   Math.random() * 0.6 + 0.4,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.current.forEach((p) => {
        p.y        += p.speed;
        p.tilt     += p.tiltSpeed;
        p.x        += Math.sin(p.tilt * 0.017) * 1.5;
        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle   = p.color;
        ctx.translate(p.x + p.w / 2, p.y + p.h / 2);
        ctx.rotate((p.tilt * Math.PI) / 180);
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
        if (p.y > canvas.height + 20) {
          p.y = -20;
          p.x = Math.random() * canvas.width;
        }
      });
      animRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animRef.current);
  }, [active]);

  return canvasRef;
}

/* ─────────────────────────────────────────────────────
   Single floating emoji particle
───────────────────────────────────────────────────── */
const EMOJIS = ["🎉", "✨", "🌟", "💫", "🎊", "🔥", "⭐", "🚀"];

function FloatingParticle({ delay, duration, x, emoji }) {
  return (
    <motion.div
      initial={{ y: "110vh", x, opacity: 0, scale: 0.5, rotate: 0 }}
      animate={{ y: "-10vh", opacity: [0, 1, 1, 0], scale: [0.5, 1.2, 1, 0.8], rotate: 360 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className="fixed bottom-0 text-2xl pointer-events-none"
      style={{ zIndex: 10000, left: x }}
    >
      {emoji}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────
   CelebrationPopup
   Props:
     isOpen    – boolean
     onClose   – fn
     planName  – string  e.g. "Pro Plan"
     isFree    – boolean
     showLinks – boolean (show Telegram / Meet links)
───────────────────────────────────────────────────── */
const CelebrationPopup = ({
  isOpen,
  onClose,
  planName  = "Your Plan",
  isFree    = false,
  showLinks = false,
}) => {
  const canvasRef = useConfetti(isOpen);

  const [particles] = useState(() =>
    Array.from({ length: 16 }, (_, i) => ({
      id:       i,
      delay:    Math.random() * 2,
      duration: Math.random() * 3 + 3,
      x:        `${Math.random() * 90 + 5}%`,
      emoji:    EMOJIS[i % EMOJIS.length],
    }))
  );

  const accentGrad = isFree
    ? "from-emerald-400 via-teal-400 to-cyan-500"
    : "from-amber-400 via-yellow-400 to-orange-400";

  const glowColor = isFree
    ? "rgba(52,211,153,0.45)"
    : "rgba(251,191,36,0.45)";

  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{ zIndex: 10000 }} className="fixed inset-0 flex items-center justify-center p-4">

          {/* Confetti canvas */}
          <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none"
            style={{ zIndex: 9999, opacity: 0.85 }}
          />

          {/* Floating emoji particles */}
          {particles.map((p) => (
            <FloatingParticle key={p.id} {...p} />
          ))}

          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/75 backdrop-blur-md"
          />

          {/* Modal card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: 60 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 40 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="relative w-full max-w-sm rounded-3xl overflow-hidden"
            style={{
              zIndex: 10001,
              boxShadow: `0 0 80px ${glowColor}, 0 0 160px ${glowColor}40, 0 25px 60px rgba(0,0,0,0.55)`,
            }}
          >
            {/* Dark background */}
            <div className="absolute inset-0 bg-[#0d0d14]" />

            {/* Rotating glow orbs */}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${accentGrad} rounded-full blur-3xl opacity-25`}
            />
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              className={`absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-br ${accentGrad} rounded-full blur-3xl opacity-20`}
            />

            {/* Content */}
            <div className="relative flex flex-col items-center text-center gap-5 p-7" style={{ zIndex: 10 }}>

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors cursor-pointer"
                aria-label="Close popup"
              >
                <FaTimes size={18} />
              </button>

              {/* Pulse-ring icon */}
              <div className="relative flex items-center justify-center mt-2">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className={`absolute rounded-full border-2 ${isFree ? "border-emerald-400" : "border-amber-400"}`}
                    initial={{ width: 80, height: 80, opacity: 0.7 }}
                    animate={{ width: 80 + i * 44, height: 80 + i * 44, opacity: 0 }}
                    transition={{ duration: 2, delay: i * 0.45, repeat: Infinity, ease: "easeOut" }}
                  />
                ))}
                <motion.div
                  animate={{ scale: [1, 1.1, 1], rotate: [0, -6, 6, 0] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                  className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${accentGrad} flex items-center justify-center shadow-2xl`}
                  style={{ boxShadow: `0 0 40px ${glowColor}` }}
                >
                  <span className="text-5xl select-none">{isFree ? "🎁" : "🎉"}</span>
                </motion.div>
              </div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2
                  className={`text-3xl font-black tracking-tight bg-gradient-to-r ${accentGrad} bg-clip-text text-transparent leading-tight`}
                >
                  {isFree ? "Free Trial Activated!" : "Tu Sahi Jagah Hai! 🔥"}
                </h2>
                <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                  {isFree
                    ? "Tera pehla FREE mentorship session bilkul ready hai! 🚀"
                    : `${planName} successfully activate ho gaya! Ab kuch nahi rokega! 💪`}
                </p>
              </motion.div>

              {/* Badges */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="flex gap-2 flex-wrap justify-center"
              >
                {(isFree
                  ? ["🎯 1 Free Session", "⚡ Instant Access", "🧠 IIT Mentor"]
                  : ["✅ Plan Active", "⚡ Full Access", "🏆 Expert Mentors"]
                ).map((badge, i) => (
                  <motion.span
                    key={badge}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 + i * 0.1, type: "spring", stiffness: 300 }}
                    className={`text-xs font-bold px-3 py-1.5 rounded-full border ${
                      isFree
                        ? "bg-emerald-400/10 border-emerald-400/30 text-emerald-300"
                        : "bg-amber-400/10 border-amber-400/30 text-amber-300"
                    }`}
                  >
                    {badge}
                  </motion.span>
                ))}
              </motion.div>

              {/* Divider */}
              <div
                className="w-full h-px"
                style={{
                  background: isFree
                    ? "linear-gradient(to right, transparent, rgba(52,211,153,0.4), transparent)"
                    : "linear-gradient(to right, transparent, rgba(251,191,36,0.4), transparent)",
                }}
              />

              {/* Action section */}
              {showLinks ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="w-full space-y-2.5"
                >
                  <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold">
                    Apna Group Join Karo 👇
                  </p>
                  <motion.a
                    href="https://t.me/satyamiitkgp"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-3 w-full bg-[#229ED9] hover:bg-[#1a8bc4] text-white font-bold py-3.5 rounded-2xl transition-all shadow-lg cursor-pointer"
                  >
                    <FaTelegram size={20} />
                    JEE / IIT Telegram Group
                  </motion.a>
                  <motion.a
                    href="https://t.me/satyamiitkgpp"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-3 w-full bg-[#1a7ab5] hover:bg-[#155e8a] text-white font-bold py-3.5 rounded-2xl transition-all shadow-lg cursor-pointer"
                  >
                    <FaTelegram size={20} />
                    NEET Telegram Group
                  </motion.a>
                  <motion.a
                    href="https://meet.google.com/emg-thxv-sgj"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-3 w-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 text-white font-bold py-3.5 rounded-2xl transition-all cursor-pointer"
                  >
                    <FaVideo size={18} className="text-green-400" />
                    Join Google Meet Session
                  </motion.a>
                  <p className="text-amber-300/70 text-xs text-center pt-0.5">
                    📌 Telegram approval manual — 24 hrs mein milega
                  </p>
                </motion.div>
              ) : (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onClose}
                  className={`w-full py-4 rounded-2xl font-extrabold text-base text-zinc-950 bg-gradient-to-r ${accentGrad} cursor-pointer`}
                  style={{ boxShadow: `0 8px 30px ${glowColor}` }}
                >
                  <span className="flex items-center justify-center gap-2">
                    <FaRocket />
                    Let&apos;s Go! 🚀
                  </span>
                </motion.button>
              )}

              {/* Motivational quote */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="text-gray-600 text-xs italic leading-relaxed"
              >
                <HiSparkles className="inline text-amber-400 mr-1" />
                &quot;Safar shuru ho gaya — IIT/NEET ka sapna ab dur nahi!&quot;
              </motion.p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CelebrationPopup;

