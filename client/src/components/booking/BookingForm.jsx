import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";

const BookingForm = () => {
  const { mentorId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    sessionType: "Online",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create Razorpay Order
      const { data } = await api.post("/payment/create-order", {
        amount: 500,
      });

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: data.order.amount,
        currency: data.order.currency,
        name: "MentorLink",
        description: "Mentorship Booking",
        order_id: data.order.id,

        handler: async function (response) {
          try {
            const res = await api.post("/bookings", {
              mentor: mentorId,
              date: formData.date,
              time: formData.time,
              sessionType: formData.sessionType,
              message: formData.message,

              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
            });

            alert(res.data.message);

            setFormData({
              fullName: "",
              email: "",
              phone: "",
              date: "",
              time: "",
              sessionType: "Online",
              message: "",
            });

            navigate("/dashboard");
          } catch (err) {
            console.log(err);
            alert("Booking Failed");
          }
        },

        prefill: {
          name: formData.fullName,
          email: formData.email,
          contact: formData.phone,
        },

        theme: {
          color: "#2563eb",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.log(error);
      alert("Payment Failed");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-2xl p-4 sm:p-8 max-w-3xl mx-auto"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        <div>
          <label className="block mb-2 font-semibold">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full border rounded-lg p-3"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full border rounded-lg p-3"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            className="w-full border rounded-lg p-3"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Preferred Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Preferred Time</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Session Type</label>
          <select
            name="sessionType"
            value={formData.sessionType}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label className="block mb-2 font-semibold">Message</label>
        <textarea
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your goal or query..."
          className="w-full border rounded-lg p-3"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-lg font-semibold"
      >
        Pay & Book Session
      </button>
    </form>
  );
};

export default BookingForm;
