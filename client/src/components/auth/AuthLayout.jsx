import { motion } from "framer-motion";

const AuthLayout = ({ title, subtitle, children }) => {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-6 py-16 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-yellow-400/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-yellow-400/10 blur-[140px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl p-10 shadow-[0_0_50px_rgba(250,204,21,.12)]"
      >
        <h1 className="text-4xl font-bold text-white text-center">{title}</h1>

        <p className="text-gray-400 text-center mt-4">{subtitle}</p>

        <div className="mt-10">{children}</div>
      </motion.div>
    </section>
  );
};

export default AuthLayout;
