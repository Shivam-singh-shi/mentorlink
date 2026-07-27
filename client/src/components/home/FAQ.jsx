import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "Who is this mentorship for?",
    answer:
      "This mentorship is designed for JEE & NEET aspirants who want structured guidance and personal support.",
  },
  {
    question: "How are doubt sessions conducted?",
    answer:
      "Doubts are solved through WhatsApp, Telegram, Google Meet, or scheduled sessions depending on the plan.",
  },
  {
    question: "Will I get a personalized study plan?",
    answer:
      "Yes. Every student receives a study plan based on their current preparation level and target exam.",
  },
  {
    question: "Can parents track my progress?",
    answer:
      "Yes. Premium plans include regular progress updates and parent interaction sessions.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center">
          Frequently Asked <span className="text-yellow-400">Questions</span>
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Everything you need to know before joining the mentorship.
        </p>

        <div className="mt-16 space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-zinc-800 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-zinc-900 transition"
              >
                <span className="font-semibold text-lg">{faq.question}</span>

                <FaChevronDown
                  className={`transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-400">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
