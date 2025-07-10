import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const POSTS_PER_PAGE = 4;

const Trending = () => {
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchTrends = async () => {
      try {
        const response = await fetch("https://www.reddit.com/r/popular.json?limit=12");
        if (!response.ok) {
          throw new Error("Failed to fetch trending topics");
        }
        const data = await response.json();
        const posts = data.data.children.map((item) => ({
          title: item.data.title,
          subreddit: item.data.subreddit_name_prefixed,
          url: "https://reddit.com" + item.data.permalink,
          score: item.data.score,
          thumbnail: item.data.thumbnail && item.data.thumbnail.startsWith("http") ? item.data.thumbnail : null,
          id: item.data.id,
        }));
        setTrends(posts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTrends();
  }, []);

  const maxPage = Math.floor((trends.length - 1) / POSTS_PER_PAGE);

  const handlePrev = () => {
    setPage((prev) => (prev === 0 ? maxPage : prev - 1));
  };

  const handleNext = () => {
    setPage((prev) => (prev === maxPage ? 0 : prev + 1));
  };

  if (loading) return <div className="text-center p-10 text-lg text-indigo-600">Loading trending posts...</div>;
  if (error) return <div className="text-center p-10 text-red-600">Error: {error}</div>;

  const startIndex = page * POSTS_PER_PAGE;
  const currentPosts = trends.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <section className=" py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-slate-900  mb-8 tracking-tight drop-shadow-md">
          Trending on Reddit
        </h2>

        {/* Posts Grid with animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {currentPosts.map((trend) => (
              <a
                key={trend.id}
                href={trend.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/90 border border-purple-300 rounded-3xl shadow-lg p-5 backdrop-blur-md hover:-translate-y-2 hover:shadow-2xl transition-transform duration-300 flex flex-col"
              >
                {trend.thumbnail ? (
                  <img
                    src={trend.thumbnail}
                    alt=""
                    className="w-full h-32 object-cover rounded-xl mb-4"
                  />
                ) : (
                  <div className="w-full h-32 bg-purple-100 rounded-xl mb-4 flex items-center justify-center text-purple-400 text-4xl font-bold">
                    
                  </div>
                )}
                <h3 className="text-lg font-semibold text-purple-900 mb-2 line-clamp-2">
                  {trend.title}
                </h3>
                <p className="text-sm text-purple-600 font-medium mb-1">{trend.subreddit}</p>
                <p className="text-sm text-purple-500">Score: {trend.score.toLocaleString()}</p>
              </a>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination Buttons outside the cards */}
        <div className="flex justify-center gap-6 mt-10">
          <button
            onClick={handlePrev}
            aria-label="Previous page"
            className="flex items-center justify-center gap-1 bg-purple-700 text-white cursor-pointer px-5 py-3 rounded-full shadow-lg hover:bg-purple-900 active:scale-95 transition transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Prev
          </button>

          <button
            onClick={handleNext}
            aria-label="Next page"
            className="flex items-center justify-center gap-1 bg-purple-700 text-white px-5 py-3  cursor-pointer rounded-full shadow-lg hover:bg-purple-900 active:scale-95 transition transform"
          >
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Page Indicator */}
        <p className="mt-6 text-purple-600 font-semibold">
          Page {page + 1} of {maxPage + 1}
        </p>
      </div>
    </section>
  );
};

export default Trending;
