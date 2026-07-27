import { motion } from "framer-motion";

const timeline = [
  {
    year: "JEE Preparation",
    title: "Started the Journey",
    desc: "Began preparing with consistency, discipline, and a dream to reach IIT.",
  },
  {
    year: "Concept Building",
    title: "Mastered the Fundamentals",
    desc: "Focused on strong concepts, mock tests, and continuous improvement.",
  },
  {
    year: "IIT Kharagpur",
    title: "Achieved the Goal",
    desc: "Successfully secured admission through dedication and smart preparation.",
  },
  {
    year: "Today",
    title: "Mentoring Students",
    desc: "Helping students avoid common mistakes and prepare with confidence.",
  },
];

const Timeline = () => {
  return (
    <section className="bg-black py-28 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center"
        >
          My <span className="text-yellow-400">Journey</span>
        </motion.h2>

        <div className="relative mt-20">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-zinc-800"></div>

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative flex mb-16 ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div className="w-full md:w-5/12 bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-yellow-400 transition">
                <p className="text-yellow-400 font-semibold">{item.year}</p>

                <h3 className="text-2xl font-bold mt-3">{item.title}</h3>

                <p className="text-gray-400 mt-4 leading-7">{item.desc}</p>
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-yellow-400 border-4 border-black"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
