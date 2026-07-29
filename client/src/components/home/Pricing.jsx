import { FaCheck } from "react-icons/fa";
import axios from "axios";

const plans = [
  {
    title: "🎁 Free Trial",
    price: "FREE",
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
  const handlePayment = async (amount) => {
    try {
      if (amount === 0) {
        alert("Free Trial Selected");
        return;
      }

      const { data } = await axios.post(
        "http://localhost:5000/api/payment/create-order",
        {
          amount,
        }
      );
      console.log("Order:", data);

      if (!data.success) {
        alert("Order creation failed");
        return;
      }

      alert("Order Created Successfully ✅");
    } catch (error) {
      console.error(error);
      alert("Payment Error");
    }
  };

  return (
    <section className="bg-black text-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-center">
          Mentorship <span className="text-yellow-400">Pricing</span>
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Choose the mentorship plan that best fits your preparation journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl border p-8 transition duration-300 ${
                plan.popular
                  ? "border-yellow-400 bg-zinc-900 scale-105 shadow-[0_0_40px_rgba(250,204,21,.18)]"
                  : "border-zinc-800 bg-zinc-900 hover:border-yellow-400"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              )}

              <h3 className="text-2xl font-bold">{plan.title}</h3>

              <div className="mt-5">
                <span className="text-5xl font-bold text-yellow-400">
                  {plan.price}
                </span>

                <p className="text-gray-400 mt-2">{plan.duration}</p>
              </div>

              <ul className="space-y-4 mt-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <FaCheck className="text-yellow-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handlePayment(plan.amount)}
                className="mt-10 w-full bg-yellow-400 text-black py-3 rounded-xl font-semibold hover:scale-105 transition"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-zinc-900 border border-yellow-400/20 rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold text-yellow-400">Important Note</h3>

          <p className="text-gray-300 mt-4 leading-relaxed max-w-4xl mx-auto">
            This mentorship provides guidance, planning, doubt support,
            motivation, and strategy for JEE & NEET preparation. Admission to
            IIT, NIT, AIIMS, or any other college cannot be guaranteed. Success
            depends on each student's dedication, consistency, and performance
            in the examination.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;