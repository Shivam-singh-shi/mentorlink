import { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    exam: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Message Sent Successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      exam: "",
      message: "",
    });
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
            className="w-full mt-8 bg-yellow-400 text-black py-4 rounded-xl font-bold hover:scale-[1.02] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
