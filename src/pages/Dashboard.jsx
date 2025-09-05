import Sidebar from "../components/Dashboard/Sidebar";
import Topbar from "../components/Dashboard/Topbar";
import StatCard from "../components/Dashboard/StatCard";
import CategoryPieChart from "../components/Dashboard/CategoryPieChart";
import RecentPosts from "../components/Dashboard/RecentPosts";
import { Sparkles, ListTree, ScrollText, Brain } from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const Dashboard = () => {
  const { currentUser: user, token } = useSelector((state) => state.user);
  const [posts, setPosts] = useState([]);
  const [analytics, setAnalytics] = useState({
    totalPosts: 0,
    toneStats: [],
    latestPostDate: null,
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handlePostDeleted = (deletedId) => {
    setPosts((prev) => prev.filter((post) => post._id !== deletedId));
  };

  useEffect(() => {
    if (!user || !token) return;

    const fetchData = async () => {
      try {
        const headers = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const [postsRes, analyticsRes] = await Promise.all([
          axios.get("http://localhost:4000/api/posts/my-posts", headers),
          axios.get("http://localhost:4000/api/posts/analytics", headers),
        ]);

        setPosts(postsRes.data);
        setAnalytics(analyticsRes.data);
      } catch (err) {
        console.error("Dashboard fetch error:", err);
      }
    };

    fetchData();
  }, [user, token]);

  return (
    <div className="flex flex-col lg:flex-row bg-[#0d1117] min-h-screen relative">
      {/* Sidebar (responsive) */}
      <div
        className={`fixed z-50 top-0 left-0 w-64 h-full bg-[#0d1117] border-r border-[#1e293b] shadow-lg transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 lg:ml-64">
        <Topbar user={user} onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <div className="p-4 sm:p-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              icon={<Sparkles />}
              label="Latest Post"
              value={
                analytics.latestPostDate
                  ? new Date(analytics.latestPostDate).toLocaleDateString()
                  : "N/A"
              }
              desc="Last Updated"
            />
            <StatCard
              icon={<ListTree />}
              label="Tones Used"
              value={analytics.toneStats.length}
              desc="Unique Tones"
            />
            <StatCard
              icon={<ScrollText />}
              label="Posts Created"
              value={analytics.totalPosts}
              desc="Total"
            />
            <StatCard
              icon={<Brain />}
              label="Author"
              value={user?.name || "Anonymous"}
              desc="Logged In"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <CategoryPieChart data={analytics.toneStats} />
            <RecentPosts posts={posts} onPostDeleted={handlePostDeleted} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
