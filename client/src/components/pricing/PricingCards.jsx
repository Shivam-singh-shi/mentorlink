import PricingCard from "./PricingCard";

const plans = [
  {
    title: "🎁 Free Trial",
    price: "FREE",
    popular: false,
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
    popular: false,
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
    popular: false,
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
    popular: true,
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
    popular: false,
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
    popular: false,
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              popular={plan.popular}
              features={plan.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
