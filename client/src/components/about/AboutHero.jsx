import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGraduationCap, FaArrowRight } from "react-icons/fa";

const AboutHero = () => {
  return (
    <section className="relative bg-black text-white overflow-hidden py-28">
      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-yellow-400/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-yellow-400/10 blur-[150px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-5 py-2 text-yellow-400"
          >
            <FaGraduationCap />
            IIT Kharagpur Mentor
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-5xl lg:text-6xl font-bold mt-8 leading-tight"
          >
            Helping Students
            <span className="text-yellow-400">
              {" "}
              Achieve Their Dream College
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-6 text-lg text-gray-400 leading-8"
          >
            MentorLink was started with one simple goal — to provide
            personalized mentorship that helps every student study smarter, stay
            consistent, and confidently crack competitive exams.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-10 flex gap-5 flex-wrap"
          >
            <Link
              to="/contact"
              className="bg-yellow-400 text-black px-7 py-4 rounded-xl font-semibold hover:scale-105 transition"
            >
              Book Free Call
            </Link>

            <Link
              to="/programs"
              className="border border-yellow-400 px-7 py-4 rounded-xl flex items-center gap-3 hover:bg-yellow-400 hover:text-black transition"
            >
              Explore Programs
              <FaArrowRight />
            </Link>
          </motion.div>
        </div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="w-[380px] h-[480px] rounded-[35px] bg-zinc-900 border border-yellow-400/20 flex items-center justify-center shadow-[0_0_60px_rgba(250,204,21,.15)]">
            <span className="text-gray-500 text-xl">Mentor Image</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
