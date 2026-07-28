import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "JEE Aspirant",
    review:
      "The mentorship completely transformed my preparation strategy. Every week I knew exactly what to study and how to improve.",
  },
  {
    name: "Ananya Singh",
    role: "NEET Aspirant",
    review:
      "Personal guidance and doubt solving helped me gain confidence. My scores improved consistently.",
  },
  {
    name: "Aditya Verma",
    role: "JEE Advanced",
    review:
      "Mock analysis, planning and motivation sessions made a huge difference in my preparation.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-black py-14 sm:py-20 lg:py-28 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center"
        >
          Student <span className="text-yellow-400">Success Stories</span>
        </motion.h2>

        <p className="text-center text-gray-400 mt-3 sm:mt-5 text-sm sm:text-base">
          Hear what students say after joining our mentorship.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-16 lg:mt-20">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{
                y: -8,
              }}
              className="relative bg-zinc-900 border border-zinc-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-yellow-400 hover:shadow-[0_0_40px_rgba(250,204,21,.15)] transition-all duration-300"
            >
              <FaQuoteLeft className="text-yellow-400 text-3xl sm:text-4xl mb-4 sm:mb-6" />

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{item.review}</p>

              <div className="flex text-yellow-400 mt-4 sm:mt-6 mb-4 sm:mb-5 text-sm sm:text-base">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <div className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-base sm:text-xl">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-bold text-base sm:text-lg">{item.name}</h3>

                  <p className="text-gray-400 text-xs sm:text-sm">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
