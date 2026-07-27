import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import MentorDetailsCard from "../components/mentor/MentorDetailsCard";

const MentorDetails = () => {
  const { id } = useParams();

  const [mentor, setMentor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMentor();
  }, []);

  const fetchMentor = async () => {
    try {
      const res = await api.get(`/mentors/${id}`);
      setMentor(res.data.mentor);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2 className="text-center mt-10 text-2xl">Loading...</h2>;
  }

  if (!mentor) {
    return (
      <h2 className="text-center mt-10 text-red-500 text-2xl">
        Mentor Not Found
      </h2>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-10 px-5">
      <MentorDetailsCard mentor={mentor} />
    </div>
  );
};

export default MentorDetails;
