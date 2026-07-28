import BookingForm from "../components/booking/BookingForm";

const Booking = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 sm:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="text-2xl sm:text-4xl font-bold text-center mb-2 sm:mb-3">
          Book a Mentorship Session
        </h1>

        <p className="text-center text-gray-600 text-sm sm:text-base mb-6 sm:mb-10">
          Fill in the details below to request a session with your mentor.
        </p>

        <BookingForm />
      </div>
    </div>
  );
};

export default Booking;
