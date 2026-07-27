import { motion } from "framer-motion";
import { FaCalendarCheck, FaClipboardList, FaRocket } from "react-icons/fa";

const steps = [
  {
    icon: <FaCalendarCheck />,
    title: "Book a Free Call",
    desc: "Schedule a free consultation to discuss your goals and preparation level.",
  },
  {
    icon: <FaClipboardList />,
    title: "Choose Your Plan",
    desc: "Select the mentorship program that best matches your needs.",
  },
  {
    icon: <FaRocket />,
    title: "Start Your Journey",
    desc: "Get your personalized roadmap, weekly targets, and continuous mentorship.",
  },
];

const Process = () => {
  return (
    <section className="bg-black py-28 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center"
        >
          How It <span className="text-yellow-400">Works</span>
        </motion.h2>

        <p className="text-center text-gray-400 mt-5">
          Getting started is simple.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center hover:border-yellow-400 hover:shadow-[0_0_40px_rgba(250,204,21,.15)] transition-all"
            >
              <div className="w-16 h-16 rounded-full bg-yellow-400 text-black flex items-center justify-center text-2xl mx-auto">
                {step.icon}
              </div>

              <h3 className="text-2xl font-bold mt-6">{step.title}</h3>

              <p className="text-gray-400 mt-4 leading-7">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
