import { Link } from "react-router-dom";

const RefundPolicy = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <div className="bg-zinc-950 border-b border-zinc-800 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold">
            Refund &amp; Cancellation <span className="text-yellow-400">Policy</span>
          </h1>
          <p className="text-gray-400 mt-4 text-lg">Last updated: July 31, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-10">

        {/* Key Highlight Box */}
        <div className="bg-yellow-400/10 border border-yellow-400/40 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">⚡ Quick Summary</h2>
          <ul className="space-y-3 text-gray-200">
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1 text-lg">✓</span>
              <span><strong>Free Trial:</strong> First session is completely FREE — no payment needed</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1 text-lg">↺</span>
              <span><strong>Refund Window:</strong> Refund requests accepted within 24 hours of payment</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1 text-lg">✗</span>
              <span><strong>No Refund:</strong> After mentorship session has started or 24 hours have passed</span>
            </li>
          </ul>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">1. Overview</h2>
          <p className="text-gray-300 leading-relaxed">
            At <strong className="text-white">Satyam Mentorship</strong>, we strive to provide the highest 
            quality mentorship experience. We understand that circumstances change, and this policy outlines 
            our approach to refunds and cancellations for our mentorship plans.
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">2. Free Trial Policy</h2>
          <p className="text-gray-300 leading-relaxed">
            The <strong className="text-white">first mentorship session is completely FREE</strong> for every 
            student. This trial session allows you to:
          </p>
          <ul className="space-y-3 text-gray-300 mt-4">
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">•</span>
              <span>Discuss your academic goals and current preparation level</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">•</span>
              <span>Receive an initial preparation analysis</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">•</span>
              <span>Evaluate if our mentorship style suits your needs</span>
            </li>
          </ul>
          <p className="text-gray-300 leading-relaxed mt-4">
            No payment is required for the free trial session. We encourage you to take the free trial 
            before purchasing any paid plan.
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">3. Refund Eligibility</h2>

          <div className="space-y-6">
            <div className="border border-green-500/30 bg-green-500/5 rounded-xl p-5">
              <h3 className="text-xl font-semibold text-green-400 mb-3">✅ Eligible for Refund</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Refund request made within <strong className="text-white">24 hours</strong> of payment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Mentorship session has <strong className="text-white">not yet started</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Technical error or duplicate payment charged</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Payment debited but plan not activated (technical failure)</span>
                </li>
              </ul>
            </div>

            <div className="border border-red-500/30 bg-red-500/5 rounded-xl p-5">
              <h3 className="text-xl font-semibold text-red-400 mb-3">❌ Not Eligible for Refund</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Refund request made after <strong className="text-white">24 hours</strong> of payment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Mentorship session has already been conducted</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Study materials or resources have been accessed</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Change of mind after accessing the service</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Unsatisfactory exam results (results depend on student's effort)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">4. Plan-Specific Refund Policy</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-zinc-700">
                  <th className="py-3 pr-4 text-yellow-400 font-semibold">Plan</th>
                  <th className="py-3 pr-4 text-yellow-400 font-semibold">Price</th>
                  <th className="py-3 text-yellow-400 font-semibold">Refund Condition</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-zinc-800">
                  <td className="py-3 pr-4 font-medium">Free Trial</td>
                  <td className="py-3 pr-4">₹0</td>
                  <td className="py-3">No payment — N/A</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="py-3 pr-4 font-medium">1 Day</td>
                  <td className="py-3 pr-4">₹9</td>
                  <td className="py-3">Within 24 hours, session not started</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="py-3 pr-4 font-medium">1 Week</td>
                  <td className="py-3 pr-4">₹49</td>
                  <td className="py-3">Within 24 hours, session not started</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="py-3 pr-4 font-medium">1 Month</td>
                  <td className="py-3 pr-4">₹99</td>
                  <td className="py-3">Within 24 hours, session not started</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="py-3 pr-4 font-medium">6 Months</td>
                  <td className="py-3 pr-4">₹299</td>
                  <td className="py-3">Within 24 hours, session not started</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">1 Year</td>
                  <td className="py-3 pr-4">₹399</td>
                  <td className="py-3">Within 24 hours, session not started</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">5. How to Request a Refund</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            To request a refund, please follow these steps:
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <span className="bg-yellow-400 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">1</span>
              <p className="text-gray-300 mt-1">
                Send an email to <strong className="text-yellow-400">satyamsinghiit@gmail.com</strong> with the subject line "Refund Request"
              </p>
            </div>
            <div className="flex gap-4">
              <span className="bg-yellow-400 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">2</span>
              <p className="text-gray-300 mt-1">
                Include your name, registered email, payment transaction ID, and reason for refund
              </p>
            </div>
            <div className="flex gap-4">
              <span className="bg-yellow-400 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">3</span>
              <p className="text-gray-300 mt-1">
                Our team will review your request within 2-3 business days
              </p>
            </div>
            <div className="flex gap-4">
              <span className="bg-yellow-400 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">4</span>
              <p className="text-gray-300 mt-1">
                If approved, the refund will be processed to your original payment method within 5-7 business days
              </p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">6. Cancellation Policy</h2>
          <p className="text-gray-300 leading-relaxed">
            You may cancel your mentorship plan at any time. However, cancellation does not automatically 
            entitle you to a refund. Refunds are governed by the eligibility criteria mentioned above. 
            Upon cancellation after the refund window:
          </p>
          <ul className="space-y-3 text-gray-300 mt-4">
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">•</span>
              <span>You will retain access to your plan until the end of the paid period</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">•</span>
              <span>No further charges will be made</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">•</span>
              <span>No partial refunds for unused days will be provided</span>
            </li>
          </ul>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">7. Contact Us</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            For any refund-related queries, please reach out to us:
          </p>
          <div className="space-y-2 text-gray-300">
            <p>📧 Email: <span className="text-yellow-400">satyamsinghiit@gmail.com</span></p>
            <p>🌐 Website: <span className="text-yellow-400">satyamiit.vercel.app</span></p>
            <p>📍 Location: IIT Kharagpur, West Bengal, India</p>
          </div>
          <div className="mt-6">
            <Link
              to="/contact"
              className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition"
            >
              Contact Us →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RefundPolicy;
