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
      const res = await api.get("/mentors");
      setMentors(res.data.mentors);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2 className="text-center mt-10 text-xl">Loading Mentors...</h2>;
  }

  return (
    <div className="max-w-7xl mx-auto py-10 px-5">
      <h1 className="text-4xl font-bold text-center mb-10">Our Mentors</h1>

      {mentors.length === 0 ? (
        <p className="text-center text-gray-500">No mentors available.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {mentors.map((mentor) => (
            <MentorCard key={mentor._id} mentor={mentor} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Mentors;
