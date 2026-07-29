import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGraduationCap, FaArrowRight } from "react-icons/fa";
import hero from "../../assets/images/hero.jpeg";
import story from "../../assets/images/story.jpeg";


const AboutHero = () => {
  return (
    <section className="relative bg-black text-white overflow-hidden py-14 sm:py-20 lg:py-28">
      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 w-72 sm:w-96 h-72 sm:h-96 bg-yellow-400/20 blur-[100px] sm:blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] bg-yellow-400/10 blur-[100px] sm:blur-[150px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm text-yellow-400"
          >
            <FaGraduationCap />
            IIT Kharagpur Mentor
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold mt-6 sm:mt-8 leading-tight"
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
            className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-400 leading-relaxed"
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
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5"
          >
            <Link
              to="/contact"
              className="bg-yellow-400 text-black px-7 py-3.5 sm:py-4 rounded-xl font-semibold hover:scale-105 transition text-center"
            >
              Book Free Call
            </Link>

            <Link
              to="/programs"
              className="border border-yellow-400 px-7 py-3.5 sm:py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-yellow-400 hover:text-black transition text-center"
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
          className="flex justify-center mt-6 lg:mt-0"
        >
          <div className="w-full max-w-[320px] sm:max-w-[380px] h-[380px] sm:h-[480px] rounded-[28px] sm:rounded-[35px] overflow-hidden border border-yellow-400/20 shadow-[0_0_60px_rgba(250,204,21,.15)]">
            <img

              src={hero}
              alt="Satyam's Journey"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
