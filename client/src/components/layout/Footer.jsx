import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-yellow-400">Satyam Mentorship</h2>
          <p className="text-gray-400 mt-4 leading-relaxed">
            JEE &amp; NEET guidance from an IIT Kharagpur student who cracked it
            without any offline coaching.
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:bg-zinc-700 transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:bg-zinc-700 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:satyamsinghiit@gmail.com"
              className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:bg-zinc-700 transition"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:bg-zinc-700 transition"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-xl mb-4">Quick Links</h3>
          <div className="flex flex-col gap-3 text-gray-400">
            <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
            <Link to="/about" className="hover:text-yellow-400 transition">About</Link>
            <Link to="/programs" className="hover:text-yellow-400 transition">Programs</Link>
            <Link to="/pricing" className="hover:text-yellow-400 transition">Pricing</Link>
            <Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link>
          </div>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold text-xl mb-4">Legal</h3>
          <div className="flex flex-col gap-3 text-gray-400">
            <Link to="/privacy-policy" className="hover:text-yellow-400 transition">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-yellow-400 transition">
              Terms &amp; Conditions
            </Link>
            <Link to="/refund-policy" className="hover:text-yellow-400 transition">
              Refund &amp; Cancellation Policy
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-xl mb-4">Contact Us</h3>
          <div className="flex flex-col gap-3 text-gray-400 text-sm">
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-400" />
              satyamsinghiit@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <FaWhatsapp className="text-yellow-400" />
              Available on WhatsApp
            </p>
            <p className="mt-2 leading-relaxed">
              📍 IIT Kharagpur,<br />West Bengal, India
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800 py-6 text-center text-gray-500 flex flex-col sm:flex-row items-center justify-between max-w-7xl mx-auto px-6 gap-2">
        <p>© 2026 Satyam Mentorship. All Rights Reserved.</p>
        <div className="flex gap-4 text-xs">
          <Link to="/privacy-policy" className="hover:text-yellow-400 transition">Privacy</Link>
          <Link to="/terms-and-conditions" className="hover:text-yellow-400 transition">Terms</Link>
          <Link to="/refund-policy" className="hover:text-yellow-400 transition">Refund Policy</Link>
          <Link to="/admin" className="text-xs text-gray-600 hover:text-yellow-400 transition font-mono">
            🔒 Admin
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
