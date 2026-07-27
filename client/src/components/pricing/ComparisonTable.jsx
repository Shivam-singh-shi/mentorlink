import { FaCheck, FaTimes } from "react-icons/fa";

const ComparisonTable = () => {
  return (
    <section className="bg-black text-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center">
          Compare <span className="text-yellow-400">Plans</span>
        </h2>

        <p className="text-center text-gray-400 mt-5">
          Choose the mentorship plan that fits your preparation.
        </p>

        <div className="overflow-x-auto mt-16 rounded-3xl border border-zinc-800">
          <table className="w-full text-center">
            <thead className="bg-zinc-900">
              <tr>
                <th className="p-5">Features</th>
                <th>Starter</th>
                <th className="text-yellow-400">Pro</th>
                <th>Elite</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-t border-zinc-800">
                <td className="p-5">Weekly Study Plan</td>
                <td>
                  <FaCheck className="mx-auto text-green-500" />
                </td>
                <td>
                  <FaCheck className="mx-auto text-green-500" />
                </td>
                <td>
                  <FaCheck className="mx-auto text-green-500" />
                </td>
              </tr>

              <tr className="border-t border-zinc-800">
                <td className="p-5">1-on-1 Calls</td>
                <td>
                  <FaTimes className="mx-auto text-red-500" />
                </td>
                <td>
                  <FaCheck className="mx-auto text-green-500" />
                </td>
                <td>
                  <FaCheck className="mx-auto text-green-500" />
                </td>
              </tr>

              <tr className="border-t border-zinc-800">
                <td className="p-5">Unlimited Doubts</td>
                <td>
                  <FaTimes className="mx-auto text-red-500" />
                </td>
                <td>
                  <FaTimes className="mx-auto text-red-500" />
                </td>
                <td>
                  <FaCheck className="mx-auto text-green-500" />
                </td>
              </tr>

              <tr className="border-t border-zinc-800">
                <td className="p-5">Mock Analysis</td>
                <td>
                  <FaTimes className="mx-auto text-red-500" />
                </td>
                <td>
                  <FaCheck className="mx-auto text-green-500" />
                </td>
                <td>
                  <FaCheck className="mx-auto text-green-500" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
