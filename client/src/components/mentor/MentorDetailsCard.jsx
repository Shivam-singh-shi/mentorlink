import { Link } from "react-router-dom";

const MentorDetailsCard = ({ mentor }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <img
        src={
          mentor.profileImage ||
          "https://via.placeholder.com/1000x400?text=Mentor"
        }
        alt={mentor.name}
        className="w-full h-72 object-cover"
      />

      <div className="p-8">
        <Link
          to="/mentors"
          className="text-blue-600 hover:underline font-medium"
        >
          ← Back to Mentors
        </Link>

        <h1 className="text-4xl font-bold mt-5">{mentor.name}</h1>

        <p className="text-blue-600 text-xl mt-2">{mentor.profession}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
          <div className="bg-gray-100 p-5 rounded-xl">
            <h3 className="font-semibold text-lg">Experience</h3>
            <p>{mentor.experience} Years</p>
          </div>

          <div className="bg-gray-100 p-5 rounded-xl">
            <h3 className="font-semibold text-lg">Hourly Rate</h3>
            <p>₹ {mentor.hourlyRate}/hour</p>
          </div>

          <div className="bg-gray-100 p-5 rounded-xl">
            <h3 className="font-semibold text-lg">Rating</h3>
            <p>⭐ {mentor.rating}</p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>

          <div className="flex flex-wrap gap-3">
            {mentor.skills?.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-3">About Mentor</h2>

          <p className="text-gray-700 leading-8">
            {mentor.bio || "No bio available."}
          </p>
        </div>

        <div className="mt-10">
          <Link to={`/booking/${mentor._id}`}>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-semibold transition">
              Book Session
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MentorDetailsCard;
