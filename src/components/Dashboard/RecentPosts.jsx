import axios from "axios";
import { Trash2 } from "lucide-react";
import { useSelector } from "react-redux";

const RecentPosts = ({ posts, onPostDeleted }) => {
  const { token } = useSelector((state) => state.user);

  const handleDelete = async (postId) => {
    const confirm = window.confirm("Are you sure you want to delete this post?");
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:4000/api/posts/${postId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      onPostDeleted(postId);
    } catch (err) {
      console.error("Error deleting post", err);
      alert("Failed to delete post.");
    }
  };

  return (
    <div className="bg-[#1e293b] rounded-xl shadow-md p-5 text-[#e5e7eb] max-h-[400px] overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Your Recent Posts</h2>
      <ul className="space-y-4">
        {posts.length > 0 ? (
          posts.map((post) => (
            <li
              key={post._id}
              className="border-b border-gray-700 pb-3 flex flex-col sm:flex-row justify-between gap-2"
            >
              <div className="flex-1">
                <div className="font-semibold">
                  {post.topic}
                  <span className="text-sm text-[#F49867] ml-1">({post.tone})</span>
                </div>
                <p className="text-sm text-gray-400 line-clamp-2">{post.post}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {new Date(post.createdAt).toLocaleString()}
                </p>
              </div>
              <button
                onClick={() => handleDelete(post._id)}
                className="text-[#d42d2d] hover:text-red-400 transition self-start"
                title="Delete Post"
              >
                <Trash2 className="w-6 h-6 cursor-pointer" />
              </button>
            </li>
          ))
        ) : (
          <p className="text-sm text-gray-500">No posts found.</p>
        )}
      </ul>
    </div>
  );
};

export default RecentPosts;
