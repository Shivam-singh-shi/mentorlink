import { motion } from "framer-motion";

const journey = [
  {
    year: "2021",
    title: "Started JEE Preparation",
    desc: "Started with determination, consistency and a clear goal to crack IIT.",
  },
  {
    year: "2022",
    title: "Built Strong Concepts",
    desc: "Focused on conceptual clarity, mock tests and continuous improvements.",
  },
  {
    year: "2023",
    title: "Reached IIT Kharagpur",
    desc: "Successfully secured admission after disciplined preparation.",
  },
  {
    year: "Today",
    title: "Mentoring Students",
    desc: "Helping aspirants achieve their dream college with personalized guidance.",
  },
];

const Journey = () => {
  return (
    <section className="bg-black text-white py-14 sm:py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center"
        >
          My <span className="text-yellow-400">Journey</span>
        </motion.h2>

        <p className="text-center text-gray-400 mt-3 sm:mt-5 text-sm sm:text-base">
          Every dream starts with a single step and grows through consistency.
        </p>

        <div className="relative mt-12 sm:mt-20">
          {/* Timeline */}
          <div className="absolute left-4 md:left-1/2 top-0 -translate-x-1/2 h-full w-1 bg-zinc-800"></div>

          {journey.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`relative flex items-center mb-10 sm:mb-16 pl-10 md:pl-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Card */}
              <div className="w-full md:w-5/12 bg-zinc-900 border border-zinc-800 rounded-2xl sm:rounded-3xl p-5 sm:p-7 hover:border-yellow-400 transition">
                <p className="text-yellow-400 font-bold text-sm sm:text-base">{item.year}</p>

                <h3 className="text-lg sm:text-2xl font-bold mt-2 sm:mt-3">{item.title}</h3>

                <p className="text-gray-400 mt-2 sm:mt-4 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>

              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-yellow-400 border-4 border-black"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
