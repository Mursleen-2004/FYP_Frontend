import React, { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

function RealTimeTrends() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTrends = async () => {
    try {
      const res = await fetch('https://www.reddit.com/r/popular.json');
      const json = await res.json();
      const topPosts = json.data.children.map((item) => item.data);
      setPosts(topPosts);
    } catch (err) {
      console.error('Failed to fetch trending posts:', err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTrends();
    const interval = setInterval(fetchTrends, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700"> Trending on Reddit</h2>

      {loading ? (
        <div className="flex justify-center items-center">
          <Loader2 className="animate-spin w-8 h-8 text-indigo-600" />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(0, 9).map((post) => (
            <a
              key={post.id}
              href={`https://reddit.com${post.permalink}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition-all border hover:border-indigo-600 group"
            >
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-700 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                {post.subreddit_name_prefixed} • 👍 {post.ups} • 💬 {post.num_comments}
              </p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default RealTimeTrends;
