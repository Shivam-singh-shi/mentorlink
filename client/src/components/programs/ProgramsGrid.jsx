import ProgramCard from "./ProgramCard";

const plans = [
  {
    title: "Starter",
    price: "₹999",
    popular: false,
    features: [
      "Weekly Study Plan",
      "Telegram Support",
      "Basic Doubt Solving",
      "Monthly Review",
    ],
  },
  {
    title: "Pro",
    price: "₹2499",
    popular: true,
    features: [
      "Everything in Starter",
      "Weekly Live Call",
      "Mock Test Analysis",
      "Priority Doubt Support",
    ],
  },
  {
    title: "Elite",
    price: "₹4999",
    popular: false,
    features: [
      "Daily Monitoring",
      "Unlimited Doubts",
      "Personal Roadmap",
      "1-on-1 Mentorship",
    ],
  },
];

const ProgramsGrid = () => {
  return (
    <section className="bg-zinc-950 py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <ProgramCard
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

export default ProgramsGrid;
