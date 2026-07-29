import { motion } from "framer-motion";

const journey = [
  {
    year: "Beginning",
    title: "Village Student",
    desc: "I belong to Deogaon village, where educational resources were limited. Despite the challenges, I decided to prepare for JEE with full dedication.",
  },
  {
    year: "Class 12",
    title: "Prepared Without Offline Coaching",
    desc: "I studied completely through online platforms without joining any offline coaching and scored 95 percentile in JEE Main.",
  },
  {
    year: "Drop Year",
    title: "Learned from My Mistakes",
    desc: "I analyzed my mistakes, improved my strategy, stayed consistent, and increased my JEE Main score to 98.1 percentile.",
  },
  {
    year: "Today",
    title: "Studying at IIT Kharagpur",
    desc: "Now I am pursuing my studies at IIT Kharagpur and helping JEE & NEET aspirants with personalized mentorship, planning, doubt support, and motivation.",
  },
];

const Journey = () => {
  return (
    <section className="bg-black text-white py-14 sm:py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center"
        >
          My <span className="text-yellow-400">Journey</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-400 mt-4 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed"
        >
          From a small village to IIT Kharagpur, every step of my journey taught
          me valuable lessons. Today, I share those experiences to help JEE &
          NEET aspirants prepare smarter, avoid common mistakes, and stay
          motivated throughout their preparation.
        </motion.p>

        {/* Timeline */}
        <div className="relative mt-14 sm:mt-20">
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
              <div className="w-full md:w-5/12 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-7 hover:border-yellow-400 hover:shadow-[0_0_25px_rgba(250,204,21,0.15)] transition-all duration-300">
                <p className="text-yellow-400 font-bold text-sm sm:text-base">
                  {item.year}
                </p>

                <h3 className="text-xl sm:text-2xl font-bold mt-3">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-yellow-400 border-4 border-black shadow-[0_0_20px_rgba(250,204,21,0.6)]"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 bg-gradient-to-r from-yellow-400/10 to-yellow-500/5 border border-yellow-400/20 rounded-3xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-yellow-400 mb-4">
            Why I Started This Mentorship
          </h3>

          <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
            I know how confusing and stressful JEE & NEET preparation can be,
            especially when you don't have the right guidance. My goal is not
            just to teach students but to mentor them throughout their journey,
            helping them stay consistent, avoid common mistakes, and prepare
            with confidence until the day of their exam.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;
