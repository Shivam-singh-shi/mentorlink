import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaGraduationCap } from "react-icons/fa";

const PricingHero = () => {
  return (
    <section className="relative bg-black text-white py-28 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-yellow-400/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-yellow-400/10 blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 border border-yellow-400/20 bg-yellow-400/10 rounded-full px-5 py-2 text-yellow-400"
        >
          <FaGraduationCap />
          Affordable Mentorship Plans
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold mt-8"
        >
          Simple &<span className="text-yellow-400"> Transparent Pricing</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-6 text-lg text-gray-400 leading-8"
        >
          Choose the mentorship plan that matches your preparation level. No
          hidden charges, only personalized guidance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center gap-5 flex-wrap mt-10"
        >
          <Link
            to="/contact"
            className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
          >
            Book Free Call
          </Link>

          <Link
            to="/programs"
            className="border border-yellow-400 px-8 py-4 rounded-xl flex items-center gap-3 hover:bg-yellow-400 hover:text-black transition"
          >
            View Programs
            <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingHero;
