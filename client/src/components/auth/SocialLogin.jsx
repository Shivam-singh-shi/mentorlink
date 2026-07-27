import { FaGoogle, FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="space-y-4">
      <button
        type="button"
        className="w-full flex items-center justify-center gap-3 border border-zinc-700 rounded-xl py-3 text-white hover:border-yellow-400 hover:bg-zinc-800 transition"
      >
        <FaGoogle className="text-red-500 text-xl" />
        Continue with Google
      </button>

      <button
        type="button"
        className="w-full flex items-center justify-center gap-3 border border-zinc-700 rounded-xl py-3 text-white hover:border-yellow-400 hover:bg-zinc-800 transition"
      >
        <FaGithub className="text-xl" />
        Continue with GitHub
      </button>
    </div>
  );
};

export default SocialLogin;
