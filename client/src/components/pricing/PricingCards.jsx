import PricingCard from "./PricingCard";

const plans = [
  {
    title: "🎁 Free Trial",
    price: "FREE",
    amount: 0,
    popular: false,
    duration: "1 Session",
    features: [
      "First Mentorship Session",
      "Preparation Analysis",
      "Basic Study Guidance",
      "Goal Discussion",
    ],
  },
  {
    title: "1 Day",
    price: "₹9",
    amount: 9,
    popular: false,
    duration: "1 Day",
    features: [
      "Personalized Study Plan",
      "Direct Guidance",
      "Ask Doubts Anytime",
      "Preparation Strategy",
    ],
  },
  {
    title: "1 Week",
    price: "₹49",
    amount: 49,
    popular: false,
    duration: "7 Days",
    features: [
      "Everything in 1 Day",
      "Daily Motivation",
      "Performance Tracking",
      "Time Management Guidance",
    ],
  },
  {
    title: "1 Month",
    price: "₹99",
    amount: 99,
    popular: true,
    duration: "30 Days",
    features: [
      "Everything in 1 Week",
      "Unlimited Doubt Support",
      "Question Photo Support",
      "Video Solutions",
      "Weekly Progress Review",
    ],
  },
  {
    title: "6 Months",
    price: "₹299",
    amount: 299,
    popular: false,
    duration: "180 Days",
    features: [
      "Complete Mentorship",
      "Long-Term Planning",
      "Regular Motivation",
      "Personal Strategy",
      "Exam Preparation Support",
    ],
  },
  {
    title: "1 Year",
    price: "₹399",
    amount: 399,
    popular: false,
    duration: "365 Days",
    features: [
      "Everything Included",
      "Complete JEE & NEET Guidance",
      "Full Preparation Support",
      "Personal Mentorship Until Exam",
      "Best Value Plan",
    ],
  },
];

const PricingCards = () => {
  return (
    <section className="bg-zinc-950 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section heading with clear intent */}
        <div className="text-center mb-14">
          <p className="text-amber-400 text-sm font-bold uppercase tracking-widest mb-3">
            ⚡ Ek Click Mein Access
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Plan choose karo → <span className="text-amber-400">Turant Telegram Group Access</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm max-w-xl mx-auto">
            Payment ke baad seedha Satyam bhai ka private Telegram group join kar sakte ho — personal guidance shuru ho jaayegi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              amount={plan.amount}
              popular={plan.popular}
              features={plan.features}
              duration={plan.duration}
            />
          ))}
        </div>

        {/* Bottom trust strip */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-gray-500 text-sm">
          <span className="flex items-center gap-2">🔒 Secure Razorpay Payment</span>
          <span className="flex items-center gap-2">⚡ Instant Group Access</span>
          <span className="flex items-center gap-2">💬 Direct Personal Guidance</span>
          <span className="flex items-center gap-2">🇮🇳 Made for Indian Students</span>
        </div>

      </div>
    </section>
  );
};

export default PricingCards;
