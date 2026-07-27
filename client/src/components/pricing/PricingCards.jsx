import PricingCard from "./PricingCard";

const plans = [
  {
    title: "Starter",
    price: "₹999",
    popular: false,
    features: [
      "Weekly Study Plan",
      "Basic Doubt Support",
      "Monthly Progress Review",
      "Telegram Community",
    ],
  },
  {
    title: "Pro",
    price: "₹2499",
    popular: true,
    features: [
      "Everything in Starter",
      "Weekly 1-on-1 Call",
      "Mock Test Analysis",
      "Priority Doubt Support",
      "Personal Roadmap",
    ],
  },
  {
    title: "Elite",
    price: "₹4999",
    popular: false,
    features: [
      "Everything in Pro",
      "Daily Monitoring",
      "Unlimited Doubts",
      "Daily Strategy Updates",
      "Complete Personal Mentorship",
    ],
  },
];

const PricingCards = () => {
  return (
    <section className="bg-zinc-950 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8">
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
