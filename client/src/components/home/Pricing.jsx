import { useState } from "react";
import { FaCheck } from "react-icons/fa";
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
          Choose the mentorship plan that best fits your preparation journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {plans.map((plan, index) => {
            const isLoading = loadingTitle === plan.title;
            const isFreeTrial = plan.amount === 0;
            return (
              <div
                key={index}
                className={`relative rounded-3xl p-6 sm:p-8 transition duration-300 ${
                  plan.popular
                    ? "border-2 border-amber-400 bg-zinc-900/95 scale-105 shadow-[0_0_40px_rgba(245,158,11,.2)]"
                    : isFreeTrial
                    ? "border border-emerald-500/40 bg-zinc-900/80 hover:border-emerald-400/70 hover:-translate-y-1.5 hover:shadow-[0_0_25px_rgba(52,211,153,0.15)]"
                    : "border border-zinc-800 bg-zinc-900/80 hover:border-amber-400/50 hover:-translate-y-1.5"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-yellow-400 text-zinc-950 px-4 py-1.5 rounded-full text-xs sm:text-sm font-extrabold tracking-wide shadow-md">
                    Most Popular
                  </span>
                )}
                {isFreeTrial && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-400 to-teal-400 text-zinc-950 px-4 py-1.5 rounded-full text-xs sm:text-sm font-extrabold tracking-wide shadow-md">
                    No Credit Card Needed
                  </span>
                )}

                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">{plan.title}</h3>

                <div className="mt-4 sm:mt-5">
                  <span className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${isFreeTrial ? "text-emerald-400" : "text-amber-400"}`}>
                    {plan.price}
                  </span>
                  <p className="text-sm sm:text-base text-gray-400 mt-1">{plan.duration}</p>
                </div>

                <ul className="space-y-3.5 sm:space-y-4 mt-6 sm:mt-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm sm:text-base text-gray-300">
                      <FaCheck className={`shrink-0 text-xs sm:text-sm ${isFreeTrial ? "text-emerald-400" : "text-amber-400"}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handlePayment(plan)}
                  disabled={isLoading || (loadingTitle !== null && !isFreeTrial)}
                  className={`mt-8 sm:mt-10 w-full py-3 sm:py-3.5 px-4 rounded-xl text-sm sm:text-base font-extrabold tracking-wide transition-all duration-200 cursor-pointer ${
                    isLoading
                      ? "bg-amber-600/70 text-zinc-900 cursor-not-allowed opacity-75"
                      : isFreeTrial
                      ? "bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-zinc-950 shadow-[0_0_20px_rgba(52,211,153,0.35)] hover:shadow-[0_0_30px_rgba(52,211,153,0.6)] hover:scale-[1.02] active:scale-[0.98]"
                      : "bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-400 text-zinc-950 shadow-[0_0_20px_rgba(251,191,36,0.35)] hover:shadow-[0_0_30px_rgba(251,191,36,0.6)] hover:scale-[1.02] active:scale-[0.98]"
                  }`}
                >
                  {isLoading ? "Processing..." : isFreeTrial ? "🎁 Claim Free Trial" : "Choose Plan"}
                </button>
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