import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGraduationCap, FaUserGraduate, FaAward } from "react-icons/fa";
import hero from "../../assets/images/hero.jpeg";

const AboutMentor = () => {
  return (
    <section className="bg-black text-white py-14 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-[320px] sm:max-w-[380px] h-[380px] sm:h-[480px] rounded-[28px] sm:rounded-[35px] overflow-hidden border-2 border-yellow-400 shadow-[0_0_60px_rgba(250,204,21,.25)]">
              <img
                src={hero}
                alt="Mentor"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 sm:px-5 py-2 rounded-full bg-yellow-400/10 border border-yellow-400 text-yellow-400 font-semibold text-xs sm:text-sm">
              About Your Mentor
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 sm:mt-6 leading-tight">
              Learn From an
              <span className="text-yellow-400"> IIT Kharagpur </span>
              Student
            </h2>

            <p className="text-gray-400 mt-4 sm:mt-6 leading-relaxed text-base sm:text-lg">
              I know the challenges every JEE and NEET aspirant faces because I
              have experienced the same journey. My goal is to help students
              build strong concepts, stay consistent, avoid common mistakes, and
              achieve their dream college with personalized mentorship.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mt-8 sm:mt-10">
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 sm:p-5">
                <FaGraduationCap className="text-yellow-400 text-2xl sm:text-3xl mb-2 sm:mb-3" />
                <h3 className="font-bold text-base sm:text-lg">IIT Kharagpur</h3>
                <p className="text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2">
                  Mentorship from an IIT student with real exam experience.
                </p>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 sm:p-5">
                <FaUserGraduate className="text-yellow-400 text-2xl sm:text-3xl mb-2 sm:mb-3" />
                <h3 className="font-bold text-base sm:text-lg">500+ Students</h3>
                <p className="text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2">
                  Helping aspirants improve confidence and performance.
                </p>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 sm:p-5">
                <FaAward className="text-yellow-400 text-2xl sm:text-3xl mb-2 sm:mb-3" />
                <h3 className="font-bold text-base sm:text-lg">Personal Guidance</h3>
                <p className="text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2">
                  Weekly planning, mock analysis and one-to-one support.
                </p>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 sm:p-5">
                <FaGraduationCap className="text-yellow-400 text-2xl sm:text-3xl mb-2 sm:mb-3" />
                <h3 className="font-bold text-base sm:text-lg">Career Roadmap</h3>
                <p className="text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2">
                  Complete strategy to crack JEE & NEET with confidence.
                </p>
              </div>
            </div>

            <div className="mt-8 sm:mt-10">
              <Link
                to="/contact"
                className="inline-block w-full sm:w-auto text-center bg-yellow-400 text-black px-8 py-3.5 sm:py-4 rounded-xl font-bold hover:scale-105 transition duration-300"
              >
                Book Free Mentorship
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMentor;
