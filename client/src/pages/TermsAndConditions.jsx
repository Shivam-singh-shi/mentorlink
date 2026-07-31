const TermsAndConditions = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <div className="bg-zinc-950 border-b border-zinc-800 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold">
            Terms &amp; <span className="text-yellow-400">Conditions</span>
          </h1>
          <p className="text-gray-400 mt-4 text-lg">Last updated: July 31, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-10">

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-300 leading-relaxed">
            By accessing and using <strong className="text-white">Satyam Mentorship</strong> (satyamiit.vercel.app), 
            you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do 
            not use our services. These terms apply to all visitors, users, and others who access or use our services.
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">2. Description of Services</h2>
          <p className="text-gray-300 leading-relaxed">
            Satyam Mentorship provides online mentorship and academic guidance services for JEE and NEET aspirants. 
            Our services include:
          </p>
          <ul className="space-y-3 text-gray-300 mt-4">
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">•</span>
              <span>Personalized study plan creation and guidance</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">•</span>
              <span>Doubt-solving support via WhatsApp/chat</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">•</span>
              <span>Motivation and performance tracking</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">•</span>
              <span>Exam strategy and preparation tips</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">•</span>
              <span>Time management and goal-setting guidance</span>
            </li>
          </ul>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">3. User Accounts</h2>
          <p className="text-gray-300 leading-relaxed">
            When you create an account with us, you must provide accurate and complete information. You are 
            responsible for maintaining the confidentiality of your account credentials and for all activities 
            that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">4. Payment Terms</h2>
          <p className="text-gray-300 leading-relaxed">
            All payments are processed securely through <strong className="text-white">Razorpay</strong>. 
            By making a payment, you agree to Razorpay's terms of service. Prices for mentorship plans are 
            listed on our website and are subject to change. Payment must be completed before accessing 
            premium mentorship services.
          </p>
          <div className="mt-4 bg-zinc-800/50 rounded-xl p-4">
            <p className="text-gray-300 text-sm">
              <strong className="text-yellow-400">Note:</strong> The first mentorship session is free. 
              Subsequent sessions require a paid plan.
            </p>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">5. No Guarantee of Results</h2>
          <p className="text-gray-300 leading-relaxed">
            Satyam Mentorship provides guidance, strategies, and support. However, we do not guarantee:
          </p>
          <ul className="space-y-3 text-gray-300 mt-4">
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span>Admission to IIT, NIT, AIIMS, or any specific college</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span>Any specific rank or score in JEE/NEET examinations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span>Success in any specific competitive examination</span>
            </li>
          </ul>
          <p className="text-gray-300 leading-relaxed mt-4">
            Academic outcomes depend entirely on the student's own dedication, consistency, effort, 
            and performance in examinations.
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">6. User Conduct</h2>
          <p className="text-gray-300 leading-relaxed">You agree not to:</p>
          <ul className="space-y-3 text-gray-300 mt-4">
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">•</span>
              <span>Share your account credentials with others</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">•</span>
              <span>Use the service for any unlawful or fraudulent purpose</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">•</span>
              <span>Reproduce or redistribute our proprietary content without permission</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">•</span>
              <span>Harass, abuse, or harm other users or mentors</span>
            </li>
          </ul>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">7. Intellectual Property</h2>
          <p className="text-gray-300 leading-relaxed">
            All content on this website, including text, graphics, logos, study materials, and other 
            content, is the property of Satyam Mentorship and is protected by applicable copyright laws. 
            You may not reproduce, distribute, or create derivative works without our express written permission.
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">8. Limitation of Liability</h2>
          <p className="text-gray-300 leading-relaxed">
            To the fullest extent permitted by law, Satyam Mentorship shall not be liable for any indirect, 
            incidental, special, consequential, or punitive damages arising from your use of our services 
            or any academic outcomes resulting from our mentorship guidance.
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">9. Governing Law</h2>
          <p className="text-gray-300 leading-relaxed">
            These Terms and Conditions are governed by and construed in accordance with the laws of India. 
            Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the 
            courts of West Bengal, India.
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">10. Changes to Terms</h2>
          <p className="text-gray-300 leading-relaxed">
            We reserve the right to modify these Terms and Conditions at any time. Changes will be 
            effective immediately upon posting to the website. Your continued use of our services after 
            any changes indicates your acceptance of the new terms.
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">11. Contact Us</h2>
          <p className="text-gray-300 leading-relaxed">
            For any questions regarding these Terms and Conditions, please contact us:
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

export default TermsAndConditions;
