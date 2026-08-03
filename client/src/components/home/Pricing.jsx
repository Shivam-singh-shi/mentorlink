import { useState } from "react";
import { FaCheck, FaBolt, FaTelegram, FaLock, FaShieldAlt } from "react-icons/fa";
import { handlePlanPayment } from "../../utils/payment";
import PaymentSuccessModal from "../payment/PaymentSuccessModal";
import FreeTrialModal from "../payment/FreeTrialModal";

const plans = [
  {
    title: "🎁 Free Trial",
    price: "FREE",
    amount: 0,
    duration: "First Mentorship Session",
    features: [
      "Introduction & Goal Discussion",
      "Preparation Analysis",
      "Basic Study Guidance",
      "No Charges",
    ],
    popular: false,
  },
  {
    title: "1 Day",
    price: "₹9",
    amount: 9,
    duration: "One Day",
    features: [
      "Personalized Study Plan",
      "Ask Doubts Anytime",
      "Direct Personal Guidance",
      "Preparation Strategy",
    ],
    popular: false,
  },
  {
    title: "1 Week",
    price: "₹49",
    amount: 49,
    duration: "7 Days",
    features: [
      "Everything in 1 Day",
      "Daily Motivation",
      "Performance Tracking",
      "Time Management Guidance",
    ],
    popular: false,
  },
  {
    title: "1 Month",
    price: "₹99",
    amount: 99,
    duration: "30 Days",
    features: [
      "Everything in 1 Week",
      "Unlimited Doubt Support",
      "Question Photo Support",
      "Video Solutions",
      "Weekly Progress Review",
    ],
    popular: true,
  },
  {
    title: "6 Months",
    price: "₹299",
    amount: 299,
    duration: "180 Days",
    features: [
      "Complete Mentorship",
      "Long-Term Planning",
      "Regular Motivation",
      "Personal Strategy",
      "Exam Preparation Support",
    ],
    popular: false,
  },
  {
    title: "1 Year",
    price: "₹399",
    amount: 399,
    duration: "365 Days",
    features: [
      "Everything Included",
      "Complete JEE/NEET Guidance",
      "Full Preparation Support",
      "Personal Mentorship Until Exam",
      "Best Value Plan",
    ],
    popular: false,
  },
];

const Pricing = () => {
  const [loadingTitle, setLoadingTitle] = useState(null);
  const [successData, setSuccessData] = useState(null);
  const [showFreeTrial, setShowFreeTrial] = useState(false);

  const handlePayment = (plan) => {
    if (plan.amount === 0) {
      setShowFreeTrial(true);
      return;
    }
    handlePlanPayment(plan, (isLoading) => {
      setLoadingTitle(isLoading ? plan.title : null);
    }, (data) => {
      setSuccessData(data);
    });
  };

  return (
    <section className="bg-black text-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-center">
          Mentorship <span className="text-amber-400">Pricing</span>
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Plan choose karo → Payment karo → <span className="text-amber-400 font-semibold">Turant Telegram Group Access milega</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {plans.map((plan, index) => {
            const isLoading = loadingTitle === plan.title;
            const isFreeTrial = plan.amount === 0;
            return (
              <div
                key={index}
                className={`relative rounded-3xl flex flex-col overflow-hidden transition-all duration-300 ${
                  plan.popular
                    ? "border-2 border-amber-400 bg-zinc-900/95 scale-105 shadow-[0_0_50px_rgba(245,158,11,.25)]"
                    : isFreeTrial
                    ? "border border-emerald-500/40 bg-zinc-900/80 hover:border-emerald-400/70 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(52,211,153,0.2)]"
                    : "border border-zinc-700/60 bg-zinc-900/80 hover:border-amber-400/50 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(245,158,11,0.12)]"
                }`}
              >
                {/* Top glow bar */}
                <div className={`h-1 w-full ${
                  plan.popular ? "bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500"
                  : isFreeTrial ? "bg-gradient-to-r from-emerald-400 to-teal-400"
                  : "bg-gradient-to-r from-zinc-700 to-zinc-600"
                }`} />

                {plan.popular && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-yellow-400 text-zinc-950 px-5 py-1.5 rounded-b-2xl text-xs font-extrabold tracking-wide shadow-md">
                    ⭐ Most Popular
                  </span>
                )}
                {isFreeTrial && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-400 to-teal-400 text-zinc-950 px-5 py-1.5 rounded-b-2xl text-xs font-extrabold tracking-wide shadow-md">
                    🎁 Bilkul FREE
                  </span>
                )}

                <div className="p-6 sm:p-7 flex flex-col flex-1 mt-2">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">{plan.title}</h3>
                  {plan.duration && (
                    <p className="text-xs text-gray-500 mt-0.5 uppercase tracking-widest font-medium">{plan.duration} Access</p>
                  )}

                  {/* Price block */}
                  <div className={`mt-4 rounded-2xl p-4 ${
                    isFreeTrial ? "bg-emerald-500/10 border border-emerald-500/20"
                    : plan.popular ? "bg-amber-400/10 border border-amber-400/20"
                    : "bg-zinc-800/50 border border-zinc-700/40"
                  }`}>
                    <span className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${
                      isFreeTrial ? "text-emerald-400" : "text-amber-400"
                    }`}>
                      {plan.price}
                    </span>
                    {!isFreeTrial && <span className="text-gray-500 text-sm ml-1">one-time</span>}
                    <div className={`mt-1.5 flex items-center gap-1.5 text-xs font-semibold ${
                      isFreeTrial ? "text-emerald-300" : "text-amber-300"
                    }`}>
                      <FaTelegram size={11} />
                      <span>{isFreeTrial ? "Telegram Group + Google Meet" : "Telegram Group + Personal Guidance"}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mt-5 flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300">
                        <FaCheck className={`shrink-0 mt-0.5 text-xs ${isFreeTrial ? "text-emerald-400" : "text-amber-400"}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <div className="mt-7 space-y-2">
                    <button
                      onClick={() => handlePayment(plan)}
                      disabled={isLoading || (loadingTitle !== null && !isFreeTrial)}
                      className={`w-full py-3.5 px-4 rounded-2xl text-sm sm:text-base font-extrabold tracking-wide transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${
                        isLoading
                          ? "bg-amber-600/50 text-zinc-900 cursor-not-allowed opacity-70"
                          : isFreeTrial
                          ? "bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-zinc-950 shadow-[0_4px_20px_rgba(52,211,153,0.4)] hover:shadow-[0_4px_30px_rgba(52,211,153,0.6)] hover:scale-[1.02] active:scale-[0.98]"
                          : plan.popular
                          ? "bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 hover:from-amber-300 hover:to-yellow-300 text-zinc-950 shadow-[0_4px_20px_rgba(251,191,36,0.45)] hover:scale-[1.02] active:scale-[0.98]"
                          : "bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-400 text-zinc-950 shadow-[0_4px_15px_rgba(251,191,36,0.3)] hover:scale-[1.02] active:scale-[0.98]"
                      }`}
                    >
                      {isLoading ? (
                        <><span className="w-4 h-4 border-2 border-zinc-900 border-t-transparent rounded-full animate-spin" /> Payment ho raha hai...</>
                      ) : isFreeTrial ? (
                        <>🎁 Free Trial Claim Karo</>
                      ) : (
                        <><FaBolt size={13} /> Abhi Subscribe Karo — Access Lo</>
                      )}
                    </button>
                    {!isFreeTrial && (
                      <p className="flex items-center justify-center gap-1.5 text-gray-500 text-xs">
                        <FaLock size={9} /> Secure Payment via Razorpay <FaShieldAlt size={9} />
                      </p>
                    )}
                    {isFreeTrial && (
                      <p className="text-center text-gray-500 text-xs">No credit card needed 🎉</p>
                    )}
                  </div>
                </div>

                {/* Bottom strip */}
                <div className={`px-6 py-3 border-t text-xs text-center font-medium ${
                  isFreeTrial ? "border-emerald-500/20 bg-emerald-500/5 text-emerald-400/70"
                  : plan.popular ? "border-amber-400/20 bg-amber-400/5 text-amber-400/70"
                  : "border-zinc-700/40 bg-zinc-800/30 text-gray-500"
                }`}>
                  {isFreeTrial
                    ? "✅ Submit karo → Seedha Telegram link milega"
                    : "✅ Pay karo → Turant Telegram Group Access milega"}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-zinc-900 border border-amber-400/20 rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold text-amber-400">Important Note</h3>

          <p className="text-gray-300 mt-4 leading-relaxed max-w-4xl mx-auto">
            This mentorship provides guidance, planning, doubt support,
            motivation, and strategy for JEE &amp; NEET preparation. Admission to
            IIT, NIT, AIIMS, or any other college cannot be guaranteed. Success
            depends on each student's dedication, consistency, and performance
            in the examination.
          </p>
        </div>
      </div>

      {/* Free Trial Modal */}
      <FreeTrialModal
        isOpen={showFreeTrial}
        onClose={() => setShowFreeTrial(false)}
      />

      {/* Payment Success Modal (paid plans) */}
      <PaymentSuccessModal
        isOpen={!!successData}
        onClose={() => setSuccessData(null)}
        planTitle={successData?.planTitle}
        amount={successData?.amount}
        expiryDate={successData?.expiryDate}
        durationDays={successData?.durationDays}
        paymentId={successData?.paymentId}
      />
    </section>
  );
};

export default Pricing;