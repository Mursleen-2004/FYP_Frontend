const SavedPosts = ({ posts }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">💾 Saved Posts</h2>
      <div className="grid gap-4">
        {posts.map((p, i) => (
          <div key={i} className="bg-[#1f2833] p-4 rounded-xl border border-[#66fcf1]">
            <p>{p.content}</p>
            <div className="text-sm text-gray-400 mt-1">{p.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedPosts;
