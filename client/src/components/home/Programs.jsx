import { FaRocket, FaBrain, FaBook, FaUsers } from "react-icons/fa";

const programs = [
  {
    icon: <FaRocket size={32} />,
    title: "1-on-1 Mentorship",
    desc: "Weekly personal guidance and strategy sessions.",
  },
  {
    icon: <FaBrain size={32} />,
    title: "Study Planning",
    desc: "Daily timetable and smart revision strategy.",
  },
  {
    icon: <FaBook size={32} />,
    title: "Doubt Solving",
    desc: "Quick doubt resolution with concept clarity.",
  },
  {
    icon: <FaUsers size={32} />,
    title: "Parent Guidance",
    desc: "Regular progress updates and parent interaction.",
  },
];

const Programs = () => {
  return (
    <section className="bg-black text-white py-14 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
          Mentorship <span className="text-yellow-400">Programs</span>
        </h2>

        <p className="text-center text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base">
          Choose the program that fits your preparation journey.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-10 sm:mt-16">
          {programs.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 hover:border-yellow-400 transition"
            >
              <div className="text-yellow-400 mb-4 sm:mb-5">{item.icon}</div>

              <h3 className="text-xl sm:text-2xl font-semibold">{item.title}</h3>

              <p className="text-gray-400 mt-2 sm:mt-4 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
