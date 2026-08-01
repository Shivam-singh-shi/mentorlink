import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "shivamsingh416130@gmail.com",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    value: "Available on Request",
  },
  {
    icon: <FaWhatsapp />,
    title: "WhatsApp",
    value: "Available on Request",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    value: "Kharagpur, India",
  },
];

const ContactInfo = () => {
  return (
    <section className="bg-zinc-950 py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center hover:border-yellow-400 hover:shadow-[0_0_35px_rgba(250,204,21,.15)] transition-all"
            >
              <div className="text-yellow-400 text-4xl mb-6 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold">{item.title}</h3>

              <p className="text-gray-400 mt-4 break-words">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
