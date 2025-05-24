import React, { useState } from "react";

const ContentGenerator = () => {
  const [type, setType] = useState("Blog");
  const [output, setOutput] = useState("");

  const generate = () => {
    setOutput(`Generated ${type} about latest AI trend...`);
  };

  return (
    <div className="bg-[#1e293b] p-5 rounded-xl shadow-md space-y-4">
      <h3 className="text-xl font-bold text-pink-400">✍️ Content Generator</h3>
      <div className="flex flex-col gap-3">
        <select
          className="bg-[#334155] p-2 rounded-md text-white"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option>Blog</option>
          <option>Instagram Post</option>
          <option>Tweet</option>
          <option>YouTube Script</option>
        </select>
        <button
          onClick={generate}
          className="bg-pink-600 px-4 py-2 rounded-md hover:bg-pink-700 transition"
        >
          Generate
        </button>
        {output && (
          <div className="mt-4 bg-[#0f172a] p-4 rounded-md border border-pink-400 text-sm">
            {output}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentGenerator;
