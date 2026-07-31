const PrivacyPolicy = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <div className="bg-zinc-950 border-b border-zinc-800 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold">
            Privacy <span className="text-yellow-400">Policy</span>
          </h1>
          <p className="text-gray-400 mt-4 text-lg">Last updated: July 31, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-10">

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">1. Introduction</h2>
          <p className="text-gray-300 leading-relaxed">
            Welcome to Satyam Mentorship ("we", "our", or "us"). We are committed to protecting your personal
            information and your right to privacy. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you visit our website{" "}
            <span className="text-yellow-400">satyamiit.vercel.app</span> and use our mentorship services.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            Please read this privacy policy carefully. If you disagree with its terms, please discontinue use of our site.
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">2. Information We Collect</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            We collect information that you voluntarily provide to us when you:
          </p>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">•</span>
              <span>Register for an account (name, email address, phone number)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">•</span>
              <span>Book a mentorship session or purchase a plan</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">•</span>
              <span>Fill out our contact form</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">•</span>
              <span>Communicate with us via email or WhatsApp</span>
            </li>
          </ul>
          <p className="text-gray-300 leading-relaxed mt-4">
            We also automatically collect certain information when you visit our website, including your IP address,
            browser type, pages visited, and time spent on pages.
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">3. How We Use Your Information</h2>
          <p className="text-gray-300 leading-relaxed mb-4">We use the information we collect to:</p>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">•</span>
              <span>Provide, operate, and maintain our mentorship services</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">•</span>
              <span>Process payments and transactions securely via Razorpay</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">•</span>
              <span>Send you service-related emails and notifications</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">•</span>
              <span>Respond to your comments, questions, and requests</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">•</span>
              <span>Personalize your mentorship experience</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">•</span>
              <span>Improve our website and services</span>
            </li>
          </ul>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">4. Payment Information</h2>
          <p className="text-gray-300 leading-relaxed">
            All payment transactions are processed securely through <strong className="text-white">Razorpay</strong>, 
            a trusted third-party payment gateway. We do not store your credit/debit card information on our servers.
            Razorpay's privacy policy governs how your payment data is handled. We only receive confirmation of 
            successful payment along with basic transaction details.
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">5. Sharing of Information</h2>
          <p className="text-gray-300 leading-relaxed">
            We do not sell, trade, rent, or otherwise share your personal information with third parties except:
          </p>
          <ul className="space-y-3 text-gray-300 mt-4">
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">•</span>
              <span>With payment processors (Razorpay) to facilitate transactions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">•</span>
              <span>When required by law or to respond to legal processes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">•</span>
              <span>To protect the rights and safety of our users and the public</span>
            </li>
          </ul>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">6. Data Security</h2>
          <p className="text-gray-300 leading-relaxed">
            We implement appropriate technical and organizational security measures to protect your personal 
            information against unauthorized access, alteration, disclosure, or destruction. However, no method 
            of transmission over the Internet or electronic storage is 100% secure.
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">7. Your Rights</h2>
          <p className="text-gray-300 leading-relaxed mb-4">You have the right to:</p>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">•</span>
              <span>Access the personal information we hold about you</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">•</span>
              <span>Request correction of inaccurate personal data</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">•</span>
              <span>Request deletion of your personal data</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">•</span>
              <span>Opt-out of marketing communications</span>
            </li>
          </ul>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">8. Contact Us</h2>
          <p className="text-gray-300 leading-relaxed">
            If you have any questions about this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="mt-4 space-y-2 text-gray-300">
            <p>📧 Email: <span className="text-yellow-400">satyamsinghiit@gmail.com</span></p>
            <p>🌐 Website: <span className="text-yellow-400">satyamiit.vercel.app</span></p>
            <p>📍 Location: IIT Kharagpur, West Bengal, India</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;
