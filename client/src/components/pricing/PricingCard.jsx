import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { handlePlanPayment } from "../../utils/payment";
import PaymentSuccessModal from "../payment/PaymentSuccessModal";
import FreeTrialModal from "../payment/FreeTrialModal";

const PricingCard = ({ title, price, amount, popular, features }) => {
  const [loading, setLoading] = useState(false);
  const [successData, setSuccessData] = useState(null);
  const [showFreeTrial, setShowFreeTrial] = useState(false);

  const isFreeTrial = amount === 0;

  const handleClick = () => {
    if (isFreeTrial) {
      // Open the dedicated Free Trial form modal
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
        className={`relative rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 ${
          popular
            ? "bg-zinc-900/95 border-2 border-amber-400 shadow-[0_0_35px_rgba(245,158,11,0.25)]"
            : isFreeTrial
            ? "bg-zinc-900/80 border border-emerald-500/40 hover:border-emerald-400/70 hover:shadow-[0_0_25px_rgba(52,211,153,0.15)]"
            : "bg-zinc-900/80 border border-zinc-800 hover:border-amber-400/50"
        }`}
      >
        {popular && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-yellow-400 text-zinc-950 px-4 py-1.5 rounded-full text-xs sm:text-sm font-extrabold tracking-wide shadow-md">
            Most Popular
          </div>
        )}

        {isFreeTrial && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-400 to-teal-400 text-zinc-950 px-4 py-1.5 rounded-full text-xs sm:text-sm font-extrabold tracking-wide shadow-md">
            No Credit Card Needed
          </div>
        )}

        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{title}</h3>

        <h2 className={`text-4xl sm:text-5xl font-extrabold mt-4 sm:mt-5 tracking-tight ${isFreeTrial ? "text-emerald-400" : "text-amber-400"}`}>
          {price}
          {!isFreeTrial && (
            <span className="text-sm sm:text-base text-gray-400 font-normal"> /month</span>
          )}
        </h2>

        <ul className="space-y-3.5 sm:space-y-4 mt-6 sm:mt-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3 text-sm sm:text-base text-gray-300">
              <FaCheck className={`shrink-0 text-xs sm:text-sm ${isFreeTrial ? "text-emerald-400" : "text-amber-400"}`} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <button
          id={`plan-btn-${title.replace(/\s+/g, "-").toLowerCase()}`}
          onClick={handleClick}
          disabled={loading}
          className={`w-full mt-8 sm:mt-10 py-3 sm:py-3.5 px-4 rounded-xl text-sm sm:text-base font-extrabold tracking-wide transition-all duration-200 cursor-pointer ${
            loading
              ? "bg-amber-600/70 text-zinc-900 cursor-not-allowed opacity-75"
              : isFreeTrial
              ? "bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-zinc-950 shadow-[0_0_20px_rgba(52,211,153,0.35)] hover:shadow-[0_0_30px_rgba(52,211,153,0.6)] hover:scale-[1.02] active:scale-[0.98]"
              : "bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-400 text-zinc-950 shadow-[0_0_20px_rgba(251,191,36,0.35)] hover:shadow-[0_0_30px_rgba(251,191,36,0.6)] hover:scale-[1.02] active:scale-[0.98]"
          }`}
        >
          {loading ? "Processing..." : isFreeTrial ? "🎁 Claim Free Trial" : "Choose Plan"}
        </button>
      </div>

      {/* Free Trial Modal — dedicated form + links flow */}
      <FreeTrialModal
        isOpen={showFreeTrial}
        onClose={() => setShowFreeTrial(false)}
      />

      {/* Payment Success Modal — for paid plans only */}
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
