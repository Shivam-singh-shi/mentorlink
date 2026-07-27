import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaBookOpen,
  FaChartLine,
  FaComments,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUserGraduate />,
    title: "1-on-1 Mentorship",
    desc: "Personalized guidance according to your current preparation level.",
  },
  {
    icon: <FaBookOpen />,
    title: "Weekly Study Plan",
    desc: "A structured roadmap with daily and weekly targets.",
  },
  {
    icon: <FaChartLine />,
    title: "Performance Tracking",
    desc: "Track mock tests, identify mistakes and improve continuously.",
  },
  {
    icon: <FaComments />,
    title: "Unlimited Doubt Support",
    desc: "Get quick doubt resolution with detailed explanations.",
  },
];

const WhyChoose = () => {
  return (
    <section className="bg-black py-28 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center"
        >
          Why Choose <span className="text-yellow-400">MentorLink?</span>
        </motion.h2>

        <p className="text-center text-gray-400 mt-5">
          Everything you need to achieve your dream college.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="group bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-yellow-400 hover:shadow-[0_0_40px_rgba(250,204,21,.15)] transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-yellow-400/10 flex items-center justify-center text-yellow-400 text-3xl group-hover:bg-yellow-400 group-hover:text-black transition-all duration-300">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mt-6">{item.title}</h3>

              <p className="text-gray-400 mt-4 leading-7">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
