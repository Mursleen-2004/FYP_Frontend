import DashboardLayout from "../components/Dashboard/DashboardLayout";
import WelcomeBanner from "../components/Dashboard/Welcome";
import GeneratedPosts from "../components/Dashboard/GeneratedPosts";
import Analytics from "../components/Dashboard/Analytics";
import SavedPosts from "../components/Dashboard/SavedPosts";
import Suggestions from "../components/Dashboard/Suggestions";
import UserPlan from "../components/Dashboard/UserPlan";
import { useSelector } from "react-redux";

const DashboardPage = () => {
   
    const { user } = useSelector((state) => state.user); 
    const userName = user?.name || "Guest";

  return (
    <DashboardLayout>
      <WelcomeBanner name={userName} />
      <GeneratedPosts posts={[{ topic: "AI in Healthcare", tone: "Professional", preview: "AI is transforming...", date: "Today" }]} />
      <Analytics />
      <SavedPosts posts={[{ content: "Here’s why AI matters...", date: "Yesterday" }]} />
      <Suggestions />
      <UserPlan plan="Free" credits={3} />
    </DashboardLayout>
  );
};

export default DashboardPage;
