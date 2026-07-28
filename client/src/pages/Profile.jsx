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
    return <h2 className="text-center mt-10 text-xl sm:text-2xl">Loading Profile...</h2>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-900">My Profile</h1>

        <div className="space-y-3 text-base sm:text-lg text-gray-700">
          <p>
            <strong className="text-gray-900">Name:</strong> {user.fullName}
          </p>

          <p className="break-all">
            <strong className="text-gray-900">Email:</strong> {user.email}
          </p>

          <p>
            <strong className="text-gray-900">Phone:</strong> {user.phone}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
