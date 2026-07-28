import { Link } from "react-router-dom";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import hero from "../../assets/images/hero.jpeg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-black text-white min-h-[90vh] flex items-center py-12 sm:py-20 lg:py-24">
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-72 sm:w-96 h-72 sm:h-96 bg-yellow-500/20 rounded-full blur-[100px] sm:blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-yellow-400/10 rounded-full blur-[100px] sm:blur-[140px]" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center px-4 sm:px-6 relative z-10 w-full">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 border border-yellow-500/30 bg-yellow-500/10 rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm text-yellow-400"
          >
            <FaStar />
            IIT Kharagpur Mentor
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 sm:mt-8 text-3xl sm:text-5xl lg:text-7xl font-extrabold leading-tight"
          >
            Crack
            <span className="text-yellow-400"> JEE & NEET</span>
            <br />
            With Personal Mentorship
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 sm:mt-8 text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl"
          >
            Personalized strategy, weekly planning, doubt solving, mock analysis
            and complete guidance from an IIT Kharagpur student.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-8 sm:mt-10"
          >
            <Link
              to="/contact"
              className="bg-yellow-400 text-black px-7 py-3.5 sm:py-4 rounded-xl font-semibold text-center hover:scale-105 hover:shadow-[0_0_40px_rgba(250,204,21,.5)] transition duration-300"
            >
              Book Free Call
            </Link>

            <Link
              to="/programs"
              className="border border-yellow-400 px-7 py-3.5 sm:py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-yellow-400 hover:text-black transition duration-300 text-center"
            >
              Explore Programs
              <FaArrowRight />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-4 mt-8 sm:mt-12"
          >
            <div className="text-yellow-400 text-lg sm:text-xl">★★★★★</div>

            <span className="text-sm sm:text-base text-gray-400">
              Trusted by
              <span className="text-white font-semibold"> 500+ </span>
              Students
            </span>
          </motion.div>
        </div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center mt-6 lg:mt-0"
        >
          <div className="w-full max-w-[320px] sm:max-w-[380px] h-[400px] sm:h-[500px] rounded-[30px] sm:rounded-[40px] overflow-hidden border-2 border-yellow-400 shadow-[0_0_60px_rgba(250,204,21,.25)]">
            <img
              src={hero}
              alt="Mentor"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute -left-2 sm:-left-8 top-10 sm:top-16 bg-zinc-900/90 backdrop-blur-md border border-zinc-700 rounded-2xl p-3 sm:p-5 shadow-xl text-xs sm:text-base max-w-[160px] sm:max-w-[200px]"
          >
            <h3 className="font-semibold text-xs sm:text-sm">📈 Weekly Progress</h3>

            <p className="text-xs text-gray-400 mt-1 sm:mt-2">+12% Improvement</p>
          </motion.div>

          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute -right-2 sm:-right-8 bottom-10 sm:bottom-16 bg-zinc-900/90 backdrop-blur-md border border-zinc-700 rounded-2xl p-3 sm:p-5 shadow-xl text-xs sm:text-base max-w-[160px] sm:max-w-[200px]"
          >
            <h3 className="font-semibold text-xs sm:text-sm">⭐ 4.9 Rating</h3>

            <p className="text-xs text-gray-400 mt-1 sm:mt-2">500+ Happy Students</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
