import { useState } from "react";
import { motion } from "framer-motion";
import api from "../../services/api";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    exam: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post("/contact", {
        name: formData.name,
        email: formData.email,
        subject: formData.exam,
        message: formData.message,
      });

      alert("Message Sent Successfully!");

      setFormData({ name: "", email: "", phone: "", exam: "", message: "" });
    } catch (error) {
      alert(error.response?.data?.message || "Failed to send message. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-black py-28 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center"
        >
          Send Us a <span className="text-yellow-400">Message</span>
        </motion.h2>

        <p className="text-center text-gray-400 mt-5">
          Fill out the form below and we'll get back to you soon.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-16 bg-zinc-900 border border-zinc-800 rounded-3xl p-10"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-zinc-800 border border-zinc-700 rounded-xl px-5 py-4 outline-none focus:border-yellow-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-zinc-800 border border-zinc-700 rounded-xl px-5 py-4 outline-none focus:border-yellow-400"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="bg-zinc-800 border border-zinc-700 rounded-xl px-5 py-4 outline-none focus:border-yellow-400"
            />

            <select
              name="exam"
              value={formData.exam}
              onChange={handleChange}
              required
              className="bg-zinc-800 border border-zinc-700 rounded-xl px-5 py-4 outline-none focus:border-yellow-400"
            >
              <option value="">Select Exam</option>
              <option value="JEE">JEE</option>
              <option value="NEET">NEET</option>
              <option value="Foundation">Foundation</option>
            </select>
          </div>

          <textarea
            rows="6"
            name="message"
            placeholder="Tell us about your preparation..."
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full mt-6 bg-zinc-800 border border-zinc-700 rounded-xl px-5 py-4 outline-none focus:border-yellow-400 resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full mt-8 py-4 rounded-xl font-bold transition flex items-center justify-center gap-2 cursor-pointer
              ${loading
                ? "bg-yellow-300 text-black opacity-70 cursor-not-allowed"
                : "bg-yellow-400 text-black hover:scale-[1.02]"
              }`}
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
