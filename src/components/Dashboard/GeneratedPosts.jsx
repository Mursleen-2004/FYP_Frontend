import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const GeneratedPosts = ({ refreshTrigger }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = useSelector((state) => state.user.currentUser?.token);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/post/my-posts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = Array.isArray(res.data) ? res.data : [];
         console.log("Fetched posts:", data); 
        setPosts(data);
      } catch (err) {
        setError("Failed to load posts.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      setLoading(true);
      fetchPosts();
    }
  }, [token, refreshTrigger]);

  if (loading) return <p className="text-gray-400">Loading posts...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!posts.length) return <p className="text-gray-400">No posts found.</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-white">📝 Recent Generated Posts</h2>
      <div className="space-y-4">
        {posts.map((p, i) => (
          <motion.div
            key={p._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-[#1f2833] p-5 rounded-xl border border-[#45a29e] shadow-md"
          >
            <p className="text-sm text-[#66fcf1]">Topic: {p.topic}</p>
            <p className="text-base mt-2 text-gray-200 whitespace-pre-line">
              {p.post?.length > 200 ? p.post.slice(0, 200) + "..." : p.post}
            </p>
            <div className="text-xs mt-3 text-gray-400">
              Tone: {p.tone} • {new Date(p.createdAt).toLocaleString()}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GeneratedPosts;
