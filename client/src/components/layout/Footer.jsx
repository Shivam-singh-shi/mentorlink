import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-3xl font-bold text-yellow-400">MentorLink</h2>

          <p className="text-gray-400 mt-4">
            Helping JEE & NEET aspirants achieve their dream college through
            personalized mentorship.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-xl mb-4">Quick Links</h3>

          <div className="flex flex-col gap-3 text-gray-400">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/programs">Programs</Link>
            <Link to="/pricing">Pricing</Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-xl mb-4">Resources</h3>

          <div className="flex flex-col gap-3 text-gray-400">
            <Link to="/resources">Blog</Link>
            <Link to="/resources">Free Notes</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-xl mb-4">Connect</h3>

          <p className="text-gray-400">Instagram</p>

          <p className="text-gray-400 mt-2">LinkedIn</p>

          <p className="text-gray-400 mt-2">Email</p>
        </div>
      </div>

      <div className="border-t border-zinc-800 py-6 text-center text-gray-500">
        © 2026 MentorLink. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
