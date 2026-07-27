import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How can I book a mentorship session?",
    answer:
      "Fill out the contact form or reach us through WhatsApp. We'll schedule a free consultation call.",
  },
  {
    question: "Is the first consultation free?",
    answer:
      "Yes, the first consultation call is completely free to understand your preparation level.",
  },
  {
    question: "Do you provide online mentorship?",
    answer:
      "Yes. All mentorship sessions are conducted online via Google Meet or Zoom.",
  },
  {
    question: "How quickly will I receive a response?",
    answer: "We usually respond within 24 hours.",
  },
];

const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-zinc-950 py-28 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center"
        >
          Frequently Asked
          <span className="text-yellow-400"> Questions</span>
        </motion.h2>

        <div className="mt-16 space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
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

export default ContactFAQ;
