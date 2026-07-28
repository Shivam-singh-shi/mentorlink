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
    <section className="bg-black text-white py-14 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
          Choose Your <span className="text-yellow-400">Plan</span>
        </h2>

        <p className="text-center text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base">
          Flexible mentorship plans for every student.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border p-6 sm:p-8 transition duration-300 ${
                plan.popular
                  ? "border-yellow-400 bg-zinc-900 lg:scale-105 shadow-[0_0_40px_rgba(250,204,21,.15)]"
                  : "border-zinc-800 bg-zinc-900 hover:border-yellow-400"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-3.5 py-1 rounded-full text-xs sm:text-sm font-semibold">
                  Most Popular
                </span>
              )}

              <h3 className="text-xl sm:text-2xl font-bold">{plan.title}</h3>

              <div className="mt-4 sm:mt-6">
                <span className="text-3xl sm:text-5xl font-bold text-yellow-400">
                  {plan.price}
                </span>
                <span className="text-gray-400 text-sm sm:text-base">{plan.duration}</span>
              </div>

              <ul className="space-y-3 sm:space-y-4 mt-6 sm:mt-8 text-sm sm:text-base">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <FaCheck className="text-yellow-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-8 sm:mt-10 w-full bg-yellow-400 text-black py-3 rounded-xl font-semibold hover:scale-105 transition">
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
