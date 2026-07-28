import { useEffect, useState } from "react";
import api from "../services/api";
import BookingCard from "../components/booking/BookingCard";

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await api.get("/bookings");
      setBookings(res.data.bookings);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-400 text-lg font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  if (bookings.length > 0) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-white">My Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bookings.map((booking) => (
              <BookingCard key={booking._id} booking={booking} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center overflow-hidden relative">

      {/* Animated background blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-yellow-400 opacity-10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-80px] right-[-80px] w-[350px] h-[350px] bg-purple-600 opacity-10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-blue-500 opacity-5 rounded-full blur-[80px]" />

      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">

        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-2xl shadow-yellow-500/30">
              <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
              </svg>
            </div>
            {/* Ping dot */}
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-yellow-400" />
            </span>
          </div>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
          <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse" />
          Under Maintenance
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
          We're Building
          <br />
          <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
            Something Great
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10">
          Your personal dashboard is currently under development. We're crafting a powerful experience
          to help you track bookings, connect with mentors, and monitor your growth journey — all in one place.
        </p>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-zinc-700" />
          <span className="text-zinc-500 text-xs font-medium tracking-widest uppercase">Coming Soon</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-zinc-700" />
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            { icon: "📅", title: "Bookings", desc: "Track all your mentor sessions" },
            { icon: "📊", title: "Progress", desc: "Monitor your learning goals" },
            { icon: "💬", title: "Messages", desc: "Chat with your mentors" },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-4 text-left hover:bg-white/8 hover:border-yellow-400/30 transition-all duration-300"
            >
              <div className="text-2xl mb-2">{item.icon}</div>
              <p className="text-white font-semibold text-sm mb-1">{item.title}</p>
              <p className="text-gray-500 text-xs">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <p className="text-gray-300 text-sm sm:text-base italic leading-relaxed">
            "The secret of getting ahead is getting started. Every expert was once a beginner."
          </p>
          <p className="text-yellow-400 text-xs font-semibold mt-3 tracking-wide">— Mark Twain</p>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
