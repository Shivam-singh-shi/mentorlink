import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaStar,
  FaBookOpen,
  FaChartLine,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaUserGraduate size={32} />,
    number: "500+",
    title: "Students Mentored",
  },
  {
    icon: <FaChartLine size={32} />,
    number: "98%",
    title: "Success Rate",
  },
  {
    icon: <FaBookOpen size={32} />,
    number: "1000+",
    title: "Doubts Solved",
  },
  {
    icon: <FaStar size={32} />,
    number: "4.9★",
    title: "Student Rating",
  },
];

const Stats = () => {
  return (
    <section className="bg-black py-12 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center hover:border-yellow-400 hover:shadow-[0_0_40px_rgba(250,204,21,.15)] transition-all duration-300"
          >
            <div className="flex justify-center text-yellow-400 mb-3 sm:mb-5">
              {item.icon}
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold text-white">{item.number}</h2>

            <p className="text-sm sm:text-base text-gray-400 mt-2 sm:mt-4">{item.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
