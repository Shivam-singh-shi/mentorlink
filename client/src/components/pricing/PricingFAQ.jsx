import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    q: "Can I upgrade my plan later?",
    a: "Yes. You can upgrade your mentorship plan at any time.",
  },
  {
    q: "How are mentorship sessions conducted?",
    a: "Sessions are conducted online through Google Meet or Zoom.",
  },
  {
    q: "Do I get a personalized study plan?",
    a: "Yes. Every student receives a customized roadmap.",
  },
  {
    q: "Is doubt support available?",
    a: "Yes. The level of support depends on your selected plan.",
  },
];

const PricingFAQ = () => {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-zinc-950 py-28 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center">
          Pricing <span className="text-yellow-400">FAQ</span>
        </h2>

        <div className="mt-16 space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex justify-between items-center p-6"
              >
                <span className="font-semibold">{faq.q}</span>

                {open === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>

              {open === index && (
                <p className="px-6 pb-6 text-gray-400">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingFAQ;
