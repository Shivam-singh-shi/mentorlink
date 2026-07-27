import { FaCheck } from "react-icons/fa";

const PricingCard = ({ title, price, popular, features }) => {
  return (
    <div
      className={`relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2
      ${
        popular
          ? "bg-zinc-900 border-2 border-yellow-400 shadow-[0_0_40px_rgba(250,204,21,.2)]"
          : "bg-zinc-900 border border-zinc-800"
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-5 py-2 rounded-full text-sm font-bold">
          Most Popular
        </div>
      )}

      <h3 className="text-3xl font-bold text-white">{title}</h3>

      <h2 className="text-5xl font-bold text-yellow-400 mt-5">
        {price}
        <span className="text-lg text-gray-400 font-normal"> /month</span>
      </h2>

      <ul className="space-y-4 mt-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3 text-gray-300">
            <FaCheck className="text-yellow-400" />
            {feature}
          </li>
        ))}
      </ul>

      <button className="w-full mt-10 bg-yellow-400 text-black py-4 rounded-xl font-semibold hover:scale-105 transition">
        Choose Plan
      </button>
    </div>
  );
};

export default PricingCard;
