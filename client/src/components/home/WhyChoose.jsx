import { motion } from "framer-motion";
import {
  FaClipboardList,
  FaFire,
  FaBrain,
  FaComments,
  FaQuestionCircle,
  FaVideo,
  FaClock,
  FaBullseye,
} from "react-icons/fa";

const features = [
  {
    icon: <FaClipboardList />,
    title: "Personalized Study Plan",
    desc: "Get a customized study plan based on your current preparation level and goals.",
  },
  {
    icon: <FaFire />,
    title: "Daily Motivation & Accountability",
    desc: "Stay consistent with regular motivation, progress tracking, and accountability.",
  },
  {
    icon: <FaBrain />,
    title: "Mental Support",
    desc: "Overcome stress, self-doubt, and exam pressure with personal guidance.",
  },
  {
    icon: <FaComments />,
    title: "Direct Personal Communication",
    desc: "Stay connected directly and receive one-to-one mentorship whenever needed.",
  },
  {
    icon: <FaQuestionCircle />,
    title: "Ask Doubts Anytime",
    desc: "Ask your academic doubts anytime and receive clear explanations.",
  },
  {
    icon: <FaVideo />,
    title: "Question Photos & Video Solutions",
    desc: "Send photos of difficult questions and get detailed video explanations.",
  },
  {
    icon: <FaClock />,
    title: "Time Management & Strategy",
    desc: "Learn effective time management and smart preparation strategies for JEE & NEET.",
  },
  {
    icon: <FaBullseye />,
    title: "Complete Mentorship",
    desc: "Learn from my personal mistakes and receive guidance from the beginning of your preparation until your exam.",
  },
];

const WhyChoose = () => {
  return (
    <section className="bg-black py-16 lg:py-28 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center"
        >
          What <span className="text-yellow-400">You'll Get</span>
        </motion.h2>

        <p className="text-center text-gray-400 mt-5 max-w-3xl mx-auto">
          Everything you need to stay focused, motivated, and prepared
          throughout your JEE & NEET journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-7 hover:border-yellow-400 hover:shadow-[0_0_30px_rgba(250,204,21,.2)] transition"
            >
              <div className="w-16 h-16 rounded-2xl bg-yellow-400/10 flex items-center justify-center text-yellow-400 text-3xl">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mt-6">{item.title}</h3>

              <p className="text-gray-400 mt-4 leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
