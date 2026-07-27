import { useEffect, useState } from "react";
import api from "../services/api";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await api.get("/auth/me");
      setUser(res.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  if (!user) {
    return <h2 className="text-center mt-10 text-2xl">Loading Profile...</h2>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6">My Profile</h1>

        <p className="mb-3">
          <strong>Name:</strong> {user.fullName}
        </p>

        <p className="mb-3">
          <strong>Email:</strong> {user.email}
        </p>

        <p className="mb-3">
          <strong>Phone:</strong> {user.phone}
        </p>
      </div>
    </div>
  );
};

export default Profile;
