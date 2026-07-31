import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { handlePlanPayment } from "../../utils/payment";

const ProgramCard = ({ title, price, amount, popular, features }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    handlePlanPayment({ title, price, amount }, setLoading);
  };

  return (
    <div
      className={`relative rounded-3xl p-8 border transition duration-300 hover:-translate-y-2
      ${
        popular
          ? "border-yellow-400 bg-zinc-900 shadow-[0_0_40px_rgba(250,204,21,.15)]"
          : "border-zinc-800 bg-zinc-900"
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-5 py-2 rounded-full text-sm font-bold">
          Most Popular
        </div>
      )}

      <h3 className="text-3xl font-bold text-white">{title}</h3>

      <p className="text-5xl font-bold text-yellow-400 mt-5">{price}</p>

      <ul className="space-y-4 mt-8">
        {features.map((item, index) => (
          <li key={index} className="flex items-center gap-3 text-gray-300">
            <FaCheck className="text-yellow-400" />
            {item}
          </li>
        ))}
      </ul>

      <button
        onClick={handleClick}
        disabled={loading}
        className={`w-full mt-10 text-black py-4 rounded-xl font-semibold transition ${
          loading
            ? "bg-yellow-600 cursor-not-allowed opacity-75"
            : "bg-yellow-400 hover:scale-105"
        }`}
      >
        {loading ? "Processing..." : "Get Started"}
      </button>
    </div>
  );
};

export default ProgramCard;
