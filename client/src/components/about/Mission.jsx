import { motion } from "framer-motion";
import { FaBullseye, FaEye } from "react-icons/fa";

const Mission = () => {
  return (
    <section className="bg-black text-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center"
        >
          Mission & <span className="text-yellow-400">Vision</span>
        </motion.h2>

        <p className="text-center text-gray-400 mt-5 max-w-2xl mx-auto">
          Our purpose is to help every aspirant prepare with confidence,
          consistency, and the right mentorship.
        </p>

        <div className="grid lg:grid-cols-2 gap-10 mt-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 hover:border-yellow-400 transition"
          >
            <div className="w-16 h-16 rounded-2xl bg-yellow-400/10 text-yellow-400 flex items-center justify-center text-3xl">
              <FaBullseye />
            </div>

            <h3 className="text-3xl font-bold mt-8">Our Mission</h3>

            <p className="text-gray-400 mt-6 leading-8">
              To provide every student with personalized mentorship, structured
              study plans, regular performance reviews, and continuous
              motivation so they can achieve their academic goals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 hover:border-yellow-400 transition"
          >
            <div className="w-16 h-16 rounded-2xl bg-yellow-400/10 text-yellow-400 flex items-center justify-center text-3xl">
              <FaEye />
            </div>

            <h3 className="text-3xl font-bold mt-8">Our Vision</h3>

            <p className="text-gray-400 mt-6 leading-8">
              To build a learning ecosystem where every student receives expert
              guidance, develops strong concepts, and gains the confidence to
              crack competitive examinations.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
