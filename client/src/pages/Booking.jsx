import BookingForm from "../components/booking/BookingForm";

const Booking = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-5">
        <h1 className="text-4xl font-bold text-center mb-3">
          Book a Mentorship Session
        </h1>

        <p className="text-center text-gray-600 mb-10">
          Fill in the details below to request a session with your mentor.
        </p>

        <BookingForm />
      </div>
    </div>
  );
};

export default Booking;
