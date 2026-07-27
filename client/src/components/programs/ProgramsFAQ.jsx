import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Who is this mentorship program for?",
    answer:
      "This program is designed for JEE and NEET aspirants who want personalized guidance, structured planning, and continuous support.",
  },
  {
    question: "How are the mentorship sessions conducted?",
    answer:
      "Sessions are conducted online through Google Meet/Zoom. Students also receive study plans, mock analysis, and doubt support.",
  },
  {
    question: "Can I ask doubts anytime?",
    answer:
      "Yes. Depending on your mentorship plan, you can ask doubts through WhatsApp or Telegram with priority support.",
  },
  {
    question: "Will I get a personalized study plan?",
    answer:
      "Absolutely. Every student receives a customized roadmap based on their current preparation level and goals.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply book a free consultation call. We'll understand your preparation level and recommend the best mentorship plan.",
  },
];

const ProgramsFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-zinc-950 text-white py-28">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center"
        >
          Frequently Asked <span className="text-yellow-400">Questions</span>
        </motion.h2>

        <p className="text-center text-gray-400 mt-5">
          Everything you need to know before joining MentorLink.
        </p>

        <div className="mt-16 space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="font-semibold text-lg">{faq.question}</span>

                {openIndex === index ? (
                  <FaChevronUp className="text-yellow-400" />
                ) : (
                  <FaChevronDown className="text-yellow-400" />
                )}
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-6 pb-6 text-gray-400 leading-7">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsFAQ;
