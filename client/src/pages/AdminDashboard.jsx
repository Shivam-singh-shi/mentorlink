import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);
  const [recentUsers, setRecentUsers] = useState([]);
  const [recentMessages, setRecentMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("users");

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin");
      return;
    }
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await api.get("/admin/stats", {
        headers: { "x-admin-token": "admin-authenticated" },
      });
      setStats(res.data.stats);
      setRecentUsers(res.data.recentUsers);
      setRecentMessages(res.data.recentMessages);
    } catch {
      navigate("/admin");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin");
  };

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-400 font-medium">Loading admin data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Background glow */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-yellow-400 opacity-5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600 opacity-5 rounded-full blur-[120px]" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg shadow-yellow-500/20">
              <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">MentorLink Admin</h1>
              <p className="text-xs text-gray-500">Control Panel</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 px-4 py-2 rounded-xl text-sm font-medium transition cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
            </svg>
            Logout
          </button>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-8">

        {/* Welcome */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-3 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse" />
            Live Dashboard
          </div>
          <h2 className="text-3xl font-extrabold text-white">Welcome, <span className="text-yellow-400">Satyam</span> 👋</h2>
          <p className="text-gray-500 mt-1">Here's what's happening on MentorLink today.</p>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {/* Total Users */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-yellow-400/30 transition-all group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-11 h-11 rounded-xl bg-blue-500/15 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
              <span className="text-xs text-gray-600 bg-white/5 px-2 py-1 rounded-lg">All time</span>
            </div>
            <p className="text-gray-400 text-sm mb-1">Total Registered Users</p>
            <p className="text-4xl font-extrabold text-white group-hover:text-blue-400 transition-colors">{stats?.totalUsers ?? 0}</p>
          </div>

          {/* Total Messages */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-yellow-400/30 transition-all group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-11 h-11 rounded-xl bg-green-500/15 flex items-center justify-center">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <span className="text-xs text-gray-600 bg-white/5 px-2 py-1 rounded-lg">All time</span>
            </div>
            <p className="text-gray-400 text-sm mb-1">Contact Form Messages</p>
            <p className="text-4xl font-extrabold text-white group-hover:text-green-400 transition-colors">{stats?.totalMessages ?? 0}</p>
          </div>

          {/* Engagement Rate */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-yellow-400/30 transition-all group sm:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-between mb-4">
              <div className="w-11 h-11 rounded-xl bg-yellow-500/15 flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <span className="text-xs text-gray-600 bg-white/5 px-2 py-1 rounded-lg">Ratio</span>
            </div>
            <p className="text-gray-400 text-sm mb-1">Engagement Rate</p>
            <p className="text-4xl font-extrabold text-white group-hover:text-yellow-400 transition-colors">
              {stats?.totalUsers > 0
                ? `${Math.round((stats.totalMessages / stats.totalUsers) * 100)}%`
                : "0%"}
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {["users", "messages"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition cursor-pointer capitalize
                ${activeTab === tab
                  ? "bg-yellow-400 text-black"
                  : "bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20"
                }`}
            >
              {tab === "users" ? `👥 Recent Users (${recentUsers.length})` : `✉️ Recent Messages (${recentMessages.length})`}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === "users" && (
          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            {recentUsers.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-gray-600">
                <svg className="w-12 h-12 mb-3 opacity-40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <p>No users registered yet</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                      <th className="text-left px-6 py-4 text-gray-400 font-semibold">#</th>
                      <th className="text-left px-6 py-4 text-gray-400 font-semibold">Name</th>
                      <th className="text-left px-6 py-4 text-gray-400 font-semibold">Email</th>
                      <th className="text-left px-6 py-4 text-gray-400 font-semibold">Phone</th>
                      <th className="text-left px-6 py-4 text-gray-400 font-semibold">Joined</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentUsers.map((user, i) => (
                      <tr key={user._id} className="border-b border-white/5 hover:bg-white/5 transition">
                        <td className="px-6 py-4 text-gray-600">{i + 1}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-black font-bold text-xs shrink-0">
                              {user.fullName?.charAt(0).toUpperCase()}
                            </div>
                            <span className="text-white font-medium">{user.fullName}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-400">{user.email}</td>
                        <td className="px-6 py-4 text-gray-400">{user.phone || "—"}</td>
                        <td className="px-6 py-4 text-gray-500 text-xs">{formatDate(user.createdAt)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {activeTab === "messages" && (
          <div className="space-y-4">
            {recentMessages.length === 0 ? (
              <div className="bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center py-16 text-gray-600">
                <svg className="w-12 h-12 mb-3 opacity-40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <p>No contact messages yet</p>
              </div>
            ) : (
              recentMessages.map((msg, i) => (
                <div key={msg._id} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-green-400/20 transition">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-black font-bold text-xs shrink-0">
                        {msg.name?.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">{msg.name}</p>
                        <p className="text-gray-500 text-xs">{msg.email}</p>
                      </div>
                    </div>
                    <span className="text-gray-600 text-xs shrink-0">{formatDate(msg.createdAt)}</span>
                  </div>
                  {msg.subject && (
                    <p className="text-yellow-400 text-xs font-semibold mb-2 uppercase tracking-wide">{msg.subject}</p>
                  )}
                  <p className="text-gray-300 text-sm leading-relaxed">{msg.message}</p>
                </div>
              ))
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
