import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const AboutCTA = () => {
  return (
    <section className="bg-zinc-950 py-28 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-zinc-900 border border-yellow-400/20 rounded-[40px] p-14 text-center shadow-[0_0_50px_rgba(250,204,21,.1)]"
        >
          <h2 className="text-5xl font-bold leading-tight">
            Ready to Start Your
            <span className="text-yellow-400"> Success Journey?</span>
          </h2>

          <p className="text-gray-400 mt-8 max-w-2xl mx-auto leading-8">
            Join MentorLink and receive personalized mentorship, weekly
            planning, mock analysis and complete guidance from an IIT Kharagpur
            mentor.
          </p>

          <div className="flex justify-center gap-5 mt-10 flex-wrap">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTA;
