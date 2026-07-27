import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ContactCTA = () => {
  return (
    <section className="bg-black py-28 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-zinc-900 border border-yellow-400/20 rounded-[40px] p-14 text-center shadow-[0_0_50px_rgba(250,204,21,.15)]"
        >
          <h2 className="text-5xl font-bold">
            Ready to Begin Your
            <span className="text-yellow-400"> Preparation?</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
            Connect with MentorLink today and take the first step toward
            achieving your dream college with expert mentorship.
          </p>

          <div className="flex justify-center gap-5 mt-10 flex-wrap">
            <Link
              to="/programs"
              className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
            >
              Explore Programs
            </Link>

            <Link
              to="/pricing"
              className="border border-yellow-400 px-8 py-4 rounded-xl hover:bg-yellow-400 hover:text-black transition"
            >
              View Pricing
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
