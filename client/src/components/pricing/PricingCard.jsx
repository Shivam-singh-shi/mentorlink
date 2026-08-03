import { useState } from "react";
import { FaCheck, FaTelegram, FaBolt, FaLock, FaShieldAlt } from "react-icons/fa";
import { handlePlanPayment } from "../../utils/payment";
import PaymentSuccessModal from "../payment/PaymentSuccessModal";
import FreeTrialModal from "../payment/FreeTrialModal";

const PricingCard = ({ title, price, amount, popular, features, duration }) => {
  const [loading, setLoading] = useState(false);
  const [successData, setSuccessData] = useState(null);
  const [showFreeTrial, setShowFreeTrial] = useState(false);

  const isFreeTrial = amount === 0;

  const handleClick = () => {
    if (isFreeTrial) {
      setShowFreeTrial(true);
    } else {
      handlePlanPayment({ title, price, amount }, setLoading, (data) => {
        setSuccessData(data);
      });
    }
  };

  return (
    <>
      <div
        className={`relative rounded-3xl flex flex-col transition-all duration-300 hover:-translate-y-2 overflow-hidden ${
          popular
            ? "bg-zinc-900/95 border-2 border-amber-400 shadow-[0_0_50px_rgba(245,158,11,0.3)]"
            : isFreeTrial
            ? "bg-zinc-900/80 border border-emerald-500/50 hover:border-emerald-400 hover:shadow-[0_0_30px_rgba(52,211,153,0.2)]"
            : "bg-zinc-900/80 border border-zinc-700/60 hover:border-amber-400/60 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]"
        }`}
      >
        {/* Top glow bar */}
        <div
          className={`h-1 w-full ${
            popular
              ? "bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500"
              : isFreeTrial
              ? "bg-gradient-to-r from-emerald-400 to-teal-400"
              : "bg-gradient-to-r from-zinc-700 to-zinc-600"
          }`}
        />

        {/* Popular Badge */}
        {popular && (
          <div className="absolute -top-px left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-yellow-400 text-zinc-950 px-5 py-1.5 rounded-b-2xl text-xs font-extrabold tracking-wide shadow-lg">
            ⭐ Most Popular
          </div>
        )}
        {isFreeTrial && (
          <div className="absolute -top-px left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-400 to-teal-400 text-zinc-950 px-5 py-1.5 rounded-b-2xl text-xs font-extrabold tracking-wide shadow-lg">
            🎁 Bilkul FREE
          </div>
        )}

        <div className="p-6 sm:p-7 flex flex-col flex-1">
          {/* Plan Title + Duration */}
          <div className="mt-3">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{title}</h3>
            {duration && (
              <p className="text-xs text-gray-500 mt-0.5 font-medium uppercase tracking-widest">
                {duration} Access
              </p>
            )}
          </div>

          {/* Price Block */}
          <div className={`mt-5 rounded-2xl p-4 ${
            isFreeTrial
              ? "bg-emerald-500/10 border border-emerald-500/20"
              : popular
              ? "bg-amber-400/10 border border-amber-400/20"
              : "bg-zinc-800/50 border border-zinc-700/40"
          }`}>
            <div className="flex items-end gap-2">
              <span className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${
                isFreeTrial ? "text-emerald-400" : "text-amber-400"
              }`}>
                {price}
              </span>
              {!isFreeTrial && (
                <span className="text-gray-500 text-sm mb-1.5 font-medium">one-time</span>
              )}
            </div>

            {/* What they GET — key value prop */}
            <div className={`mt-2 flex items-center gap-1.5 text-xs font-semibold ${
              isFreeTrial ? "text-emerald-300" : "text-amber-300"
            }`}>
              <FaTelegram size={12} />
              <span>
                {isFreeTrial
                  ? "Telegram Group Access + Google Meet"
                  : "Telegram Group Access + Personal Guidance"}
              </span>
            </div>
          </div>

          {/* Features */}
          <ul className="space-y-3 mt-5 flex-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2.5 text-sm text-gray-300">
                <FaCheck className={`shrink-0 mt-0.5 text-xs ${
                  isFreeTrial ? "text-emerald-400" : "text-amber-400"
                }`} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="mt-7 space-y-2">
            <button
              id={`plan-btn-${title.replace(/\s+/g, "-").toLowerCase()}`}
              onClick={handleClick}
              disabled={loading}
              className={`w-full py-3.5 px-4 rounded-2xl text-sm sm:text-base font-extrabold tracking-wide transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${
                loading
                  ? "bg-amber-600/50 text-zinc-900 cursor-not-allowed opacity-70"
                  : isFreeTrial
                  ? "bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-zinc-950 shadow-[0_4px_20px_rgba(52,211,153,0.4)] hover:shadow-[0_4px_30px_rgba(52,211,153,0.6)] hover:scale-[1.02] active:scale-[0.98]"
                  : popular
                  ? "bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 hover:from-amber-300 hover:to-yellow-300 text-zinc-950 shadow-[0_4px_20px_rgba(251,191,36,0.45)] hover:shadow-[0_4px_30px_rgba(251,191,36,0.7)] hover:scale-[1.02] active:scale-[0.98]"
                  : "bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-400 text-zinc-950 shadow-[0_4px_15px_rgba(251,191,36,0.3)] hover:shadow-[0_4px_25px_rgba(251,191,36,0.5)] hover:scale-[1.02] active:scale-[0.98]"
              }`}
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-zinc-900 border-t-transparent rounded-full animate-spin" />
                  Payment ho raha hai...
                </>
              ) : isFreeTrial ? (
                <>
                  <span>🎁</span> Free Trial Claim Karo
                </>
              ) : (
                <>
                  <FaBolt size={14} />
                  Abhi Subscribe Karo — Access Lo
                </>
              )}
            </button>

            {/* Trust line below button */}
            {!isFreeTrial && (
              <p className="flex items-center justify-center gap-1.5 text-gray-500 text-xs">
                <FaLock size={9} />
                Secure Payment via Razorpay
                <FaShieldAlt size={9} />
              </p>
            )}
            {isFreeTrial && (
              <p className="text-center text-gray-500 text-xs">
                No credit card needed 🎉
              </p>
            )}
          </div>
        </div>

        {/* Bottom "What happens after" strip */}
        <div className={`px-6 py-3 border-t text-xs text-center font-medium ${
          isFreeTrial
            ? "border-emerald-500/20 bg-emerald-500/5 text-emerald-400/70"
            : popular
            ? "border-amber-400/20 bg-amber-400/5 text-amber-400/70"
            : "border-zinc-700/40 bg-zinc-800/30 text-gray-500"
        }`}>
          {isFreeTrial
            ? "✅ Submit karo → Seedha Telegram link milega"
            : "✅ Pay karo → Turant Telegram Group Access milega"}
        </div>
      </div>

      {/* Free Trial Modal */}
      <FreeTrialModal
        isOpen={showFreeTrial}
        onClose={() => setShowFreeTrial(false)}
      />

      {/* Payment Success Modal */}
      <PaymentSuccessModal
        isOpen={!!successData}
        onClose={() => setSuccessData(null)}
        planTitle={successData?.planTitle}
        amount={successData?.amount}
        expiryDate={successData?.expiryDate}
        durationDays={successData?.durationDays}
        paymentId={successData?.paymentId}
      />
    </>
  );
};

export default PricingCard;
