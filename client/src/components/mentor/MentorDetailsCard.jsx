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
        className="w-full h-48 sm:h-72 object-cover"
      />

      <div className="p-4 sm:p-8">
        <Link
          to="/mentors"
          className="text-blue-600 hover:underline font-medium text-sm sm:text-base"
        >
          ← Back to Mentors
        </Link>

        <h1 className="text-2xl sm:text-4xl font-bold mt-3 sm:mt-5">{mentor.name}</h1>

        <p className="text-blue-600 text-lg sm:text-xl mt-1 sm:mt-2">{mentor.profession}</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 mt-6 sm:mt-8">
          <div className="bg-gray-100 p-4 sm:p-5 rounded-xl">
            <h3 className="font-semibold text-base sm:text-lg">Experience</h3>
            <p className="text-sm sm:text-base">{mentor.experience} Years</p>
          </div>

          <div className="bg-gray-100 p-4 sm:p-5 rounded-xl">
            <h3 className="font-semibold text-base sm:text-lg">Hourly Rate</h3>
            <p className="text-sm sm:text-base">₹ {mentor.hourlyRate}/hour</p>
          </div>

          <div className="bg-gray-100 p-4 sm:p-5 rounded-xl">
            <h3 className="font-semibold text-base sm:text-lg">Rating</h3>
            <p className="text-sm sm:text-base">⭐ {mentor.rating}</p>
          </div>
        </div>

        <div className="mt-6 sm:mt-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Skills</h2>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            {mentor.skills?.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 sm:mt-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">About Mentor</h2>

          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            {mentor.bio || "No bio available."}
          </p>
        </div>

        <div className="mt-8 sm:mt-10">
          <Link to={`/booking/${mentor._id}`}>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 sm:py-4 rounded-xl text-base sm:text-lg font-semibold transition">
              Book Session
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MentorDetailsCard;
