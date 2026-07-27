import api from "../../services/api";

const BookingCard = ({ booking }) => {
  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to cancel this booking?",
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/bookings/${booking._id}`);

      alert("Booking Cancelled Successfully");

      // Refresh Dashboard
      window.location.reload();
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Unable to Cancel Booking");
    }
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-6 border hover:shadow-lg transition">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">
          {booking.mentor?.name || "Mentor"}
        </h2>

        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${
            booking.status === "Approved"
              ? "bg-green-100 text-green-700"
              : booking.status === "Rejected"
                ? "bg-red-100 text-red-700"
                : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {booking.status}
        </span>
      </div>

      <div className="mt-5 space-y-2">
        <p>
          <strong>Profession:</strong> {booking.mentor?.profession || "N/A"}
        </p>

        <p>
          <strong>Date:</strong>{" "}
          {new Date(booking.date).toLocaleDateString("en-IN")}
        </p>

        <p>
          <strong>Time:</strong> {booking.time}
        </p>

        <p>
          <strong>Session Type:</strong> {booking.sessionType}
        </p>

        <p>
          <strong>Message:</strong> {booking.message || "No message provided"}
        </p>
      </div>

      <button
        onClick={handleDelete}
        className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
      >
        Cancel Booking
      </button>
    </div>
  );
};

export default BookingCard;
