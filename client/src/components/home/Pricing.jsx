import { FaCheck } from "react-icons/fa";

const plans = [
  {
    title: "Starter",
    price: "₹99",
    duration: "/month",
    features: [
      "Weekly Study Plan",
      "Doubt Support",
      "Progress Tracking",
      "Telegram Community",
    ],
    popular: false,
  },
  {
    title: "Premium",
    price: "₹249",
    duration: "/month",
    features: [
      "Everything in Starter",
      "1-on-1 Mentorship",
      "Weekly Video Call",
      "Personalized Strategy",
      "Priority Doubt Solving",
    ],
    popular: true,
  },
  {
    title: "Elite",
    price: "Custom",
    duration: "",
    features: [
      "Daily Guidance",
      "Unlimited Doubts",
      "Parent Meetings",
      "Full Exam Strategy",
      "Personal Mentor",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center">
          Choose Your <span className="text-yellow-400">Plan</span>
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Flexible mentorship plans for every student.
        </p>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border p-8 transition duration-300 ${
                plan.popular
                  ? "border-yellow-400 bg-zinc-900 scale-105"
                  : "border-zinc-800 bg-zinc-900 hover:border-yellow-400"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              )}

              <h3 className="text-2xl font-bold">{plan.title}</h3>

              <div className="mt-6">
                <span className="text-5xl font-bold text-yellow-400">
                  {plan.price}
                </span>
                <span className="text-gray-400">{plan.duration}</span>
              </div>

              <ul className="space-y-4 mt-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <FaCheck className="text-yellow-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-10 w-full bg-yellow-400 text-black py-3 rounded-xl font-semibold hover:scale-105 transition">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
