import { Link } from "react-router-dom";

const MentorCard = ({ mentor }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      <img
        src={
          mentor.profileImage ||
          "https://via.placeholder.com/400x250?text=Mentor"
        }
        alt={mentor.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">
        <h2 className="text-2xl font-bold text-gray-800">{mentor.name}</h2>

        <p className="text-blue-600 font-medium mt-1">{mentor.profession}</p>

        <p className="mt-3 text-gray-700">
          <span className="font-semibold">Experience:</span> {mentor.experience}{" "}
          Years
        </p>

        <p className="text-gray-700">
          <span className="font-semibold">Hourly Rate:</span> ₹
          {mentor.hourlyRate}/hour
        </p>

        <p className="text-yellow-500 font-semibold mt-2">⭐ {mentor.rating}</p>

        <div className="mt-4">
          <p className="font-semibold text-gray-700">Skills</p>

          <div className="flex flex-wrap gap-2 mt-2">
            {mentor.skills?.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <Link to={`/mentors/${mentor._id}`}>
          <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">
            View Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MentorCard;
