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
    return <h2 className="text-center text-2xl mt-10">Loading Dashboard...</h2>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-5">
        <h1 className="text-4xl font-bold mb-8">My Dashboard</h1>

        <div className="bg-white rounded-xl shadow-md p-6 mb-10">
          <h2 className="text-2xl font-semibold mb-4">My Bookings</h2>

          {bookings.length === 0 ? (
            <p>No Bookings Found</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {bookings.map((booking) => (
                <BookingCard key={booking._id} booking={booking} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
