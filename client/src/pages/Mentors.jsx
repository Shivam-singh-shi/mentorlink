import { useEffect, useState } from "react";
import api from "../services/api";
import MentorCard from "../components/mentor/MentorCard";

const Mentors = () => {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMentors();
  }, []);

  const fetchMentors = async () => {
    try {
      const response = await api.get("/mentors");
      setMentors(response.data.mentors);
    } catch (error) {
      console.error("Error fetching mentors:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="text-center mt-10 text-xl">Loading mentors...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
      <h1 className="text-2xl sm:text-4xl font-bold text-center mb-6 sm:mb-10">Our Mentors</h1>

      {mentors.length === 0 ? (
        <p className="text-center text-gray-500 text-sm sm:text-base">No mentors available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor) => (
            <MentorCard key={mentor._id} mentor={mentor} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Mentors;
