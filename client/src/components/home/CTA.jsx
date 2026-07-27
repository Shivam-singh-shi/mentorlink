import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="bg-black py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="rounded-3xl border border-yellow-400 bg-gradient-to-r from-zinc-900 to-zinc-800 p-12 text-center">
          <h2 className="text-5xl font-bold text-white">
            Ready to Crack
            <span className="text-yellow-400"> JEE & NEET?</span>
          </h2>

          <p className="text-gray-300 mt-6 text-lg">
            Get personalized mentorship from an IIT Kharagpur student and
            accelerate your preparation with a proven strategy.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">
            <Link
              to="/contact"
              className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
            >
              Book Free Call
            </Link>

            <Link
              to="/programs"
              className="border border-yellow-400 text-yellow-400 px-8 py-4 rounded-xl hover:bg-yellow-400 hover:text-black transition"
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
