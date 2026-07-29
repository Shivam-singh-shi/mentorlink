import { FaCheck } from "react-icons/fa";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;
const RAZORPAY_KEY = import.meta.env.VITE_RAZORPAY_KEY_ID;

const PricingCard = ({ title, price, amount, popular, features }) => {
  const handlePayment = async () => {
    try {
      if (amount === 0) {
        alert("Free Trial Selected");
        return;
      }

      // Create Order
      const { data } = await axios.post(`${API}/payment/create-order`, {
        amount,
      });

      if (!data.success) {
        alert("Order creation failed");
        return;
      }

      // Razorpay Options
      const options = {
        key: RAZORPAY_KEY,

        amount: data.order.amount,
        currency: data.order.currency,
        name: "MentorLink",
        description: title,
        order_id: data.order.id,

        handler: async function (response) {
          try {
            const verify = await axios.post(`${API}/payment/verify`, {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });

            if (verify.data.success) {
              alert("✅ Payment Verified Successfully");

              console.log("Payment ID:", response.razorpay_payment_id);
              console.log("Order ID:", response.razorpay_order_id);
              console.log("Signature:", response.razorpay_signature);
            } else {
              alert("❌ Payment Verification Failed");
            }
          } catch (error) {
            console.error(error);
            alert("Verification Error");
          }
        },

        prefill: {
          name: "Student",
          email: "student@example.com",
          contact: "9999999999",
        },

        theme: {
          color: "#facc15",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error(error);
      alert("Payment Failed");
    }
  };

  return (
    <div
      className={`relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 ${
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

      <button
        onClick={handlePayment}
        className="w-full mt-10 bg-yellow-400 text-black py-4 rounded-xl font-semibold hover:scale-105 transition"
      >
        Choose Plan
      </button>
    </div>
  );
};

export default PricingCard;
