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
    <section className="bg-black py-28 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center"
        >
          Student <span className="text-yellow-400">Success Stories</span>
        </motion.h2>

        <p className="text-center text-gray-400 mt-5">
          Hear what students say after joining our mentorship.
        </p>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">
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
              className="relative bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-yellow-400 hover:shadow-[0_0_40px_rgba(250,204,21,.15)] transition-all duration-300"
            >
              <FaQuoteLeft className="text-yellow-400 text-4xl mb-6" />

              <p className="text-gray-300 leading-8">{item.review}</p>

              <div className="flex text-yellow-400 mt-6 mb-5">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <div className="flex items-center gap-4 mt-8">
                <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-xl">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-bold text-lg">{item.name}</h3>

                  <p className="text-gray-400">{item.role}</p>
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
