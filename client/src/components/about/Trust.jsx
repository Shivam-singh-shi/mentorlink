import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaChartLine,
  FaComments,
  FaClipboardCheck,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUserGraduate />,
    title: "Personal Mentorship",
    desc: "Individual guidance tailored to each student's preparation level.",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Weekly Planning",
    desc: "Clear weekly targets with continuous accountability.",
  },
  {
    icon: <FaChartLine />,
    title: "Progress Tracking",
    desc: "Detailed analysis of mock tests and improvement areas.",
  },
  {
    icon: <FaComments />,
    title: "Unlimited Doubt Support",
    desc: "Quick doubt resolution whenever you need help.",
  },
];

const Trust = () => {
  return (
    <section className="bg-zinc-950 text-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center"
        >
          Why Students <span className="text-yellow-400">Trust Us</span>
        </motion.h2>

        <p className="text-center text-gray-400 mt-5">
          More than teaching, we focus on building confidence and consistency.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-yellow-400 hover:shadow-[0_0_35px_rgba(250,204,21,.15)] transition"
            >
              <div className="text-yellow-400 text-4xl mb-6">{item.icon}</div>

              <h3 className="text-2xl font-bold">{item.title}</h3>

              <p className="text-gray-400 mt-4 leading-7">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
