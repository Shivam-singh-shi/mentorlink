import { Link } from "react-router-dom";

const PricingCTA = () => {
  return (
    <section className="bg-black py-28 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-zinc-900 border border-yellow-400/20 rounded-[40px] p-14 text-center shadow-[0_0_50px_rgba(250,204,21,.15)]">
          <h2 className="text-5xl font-bold">Start Your Journey Today</h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
            Take the first step towards your dream college with personalized
            mentorship and expert guidance.
          </p>

          <div className="flex justify-center gap-5 flex-wrap mt-10">
            <Link
              to="/contact"
              className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
            >
              Book Free Call
            </Link>

            <Link
              to="/programs"
              className="border border-yellow-400 px-8 py-4 rounded-xl hover:bg-yellow-400 hover:text-black transition"
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;
