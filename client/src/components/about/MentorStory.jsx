import { motion } from "framer-motion";

const MentorStory = () => {
  return (
    <section className="bg-zinc-950 text-white py-24">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="rounded-3xl bg-zinc-900 border border-zinc-800 h-[420px] flex items-center justify-center shadow-lg">
            <span className="text-gray-500 text-xl">Story Image</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold">
            My <span className="text-yellow-400">Story</span>
          </h2>

          <p className="text-gray-400 mt-8 leading-8">
            Preparing for competitive exams is not only about studying hard;
            it's about following the right strategy. During my own preparation,
            I realized that many students struggle because they don't have
            proper guidance or a personalized roadmap.
          </p>

          <p className="text-gray-400 mt-6 leading-8">
            That's why MentorLink focuses on personal mentorship instead of
            generic courses. Every student gets a clear study plan, regular
            progress tracking, doubt support, and continuous motivation to stay
            consistent throughout the journey.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center">
              <h3 className="text-4xl font-bold text-yellow-400">500+</h3>
              <p className="text-gray-400 mt-2">Students Guided</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center">
              <h3 className="text-4xl font-bold text-yellow-400">4.9★</h3>
              <p className="text-gray-400 mt-2">Average Rating</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MentorStory;
