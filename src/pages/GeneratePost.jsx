import React, { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";
import { jsPDF } from "jspdf";

// Format timestamp
const getFormattedDateTime = () => {
  const now = new Date();
  return now.toLocaleString();
};


// Download as .pdf
const downloadAsPDF = (topic, tone, post) => {
  const timestamp = getFormattedDateTime();
  const doc = new jsPDF();
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(12);
  doc.text(`Topic: ${topic}`, 10, 10);
  doc.text(`Tone: ${tone}`, 10, 20);
  doc.text(`Date: ${timestamp}`, 10, 30);
  const lines = doc.splitTextToSize(post, 180);
  doc.text(lines, 10, 45);
  doc.save(`${topic || "generated-post"}.pdf`);
};

const tones = ["Funny", "Professional", "Casual", "Inspiring"];

const GeneratePost = () => {
  const [topic, setTopic] = useState("");
  const [tone, setTone] = useState(tones[0]);
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState("");
  const [saved, setSaved] = useState(false);
  const [doneTyping, setDoneTyping] = useState(false);
  const navigate = useNavigate();

  const { currentUser } = useSelector((state) => state.user);
  const token = currentUser?.token || localStorage.getItem("token");

  const handleGenerate = async () => {
    if (!topic.trim()) {
      toast.error("Please enter a topic");
      return;
    }

    setLoading(true);
    setDoneTyping(false);
    setPost("");

    try {
      const response = await fetch("http://localhost:4000/api/ai/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ topic, tone }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to generate");

      setPost(data.post);
    } catch (err) {
      toast.error(err.message || "Error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/post/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ topic, tone, post }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to save");

      toast.success("Post saved successfully!");
      setSaved(true);
    } catch (err) {
      toast.error(err.message || "Failed to save");
    }
  };

  return (
    <div className="relative min-h-screen px-6 py-10 flex flex-col items-center overflow-hidden text-white">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="stars" />
        <div className="nebula" />
        <div className="shooting-star" />
        <div className="moon" />
      </div>
      {/* Dark overlay for readability */}
     
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-7 left-6 text-white hover:text-[#66fcf1] flex items-center gap-2 z-50"
      >
        <ArrowLeft className="w-8 h-8 cursor-pointer" />
      </button>
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-center mb-12 tracking-widest z-10"
      >
        AI Post Generator
      </motion.h1>
      {/* Input Card */}
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        glareEnable={true}
        glareColor="#66fcf1"
        glareMaxOpacity={0.2}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-xl bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 z-10"
        >
          <div className="mb-6">
            <label className="block mb-2 text-gray-300 font-semibold">
              Topic
            </label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g., AI in Education"
              className="w-full px-4 py-3 rounded-xl bg-[#0b0c10] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#66fcf1]"
              disabled={!!post}
            />
          </div>

          <div className="mb-8">
            <label className="block mb-2 text-gray-300 font-semibold">
              Tone
            </label>
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#0b0c10] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#66fcf1]"
              disabled={!!post}
            >
              {tones.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px #66fcf1" }}
            onClick={handleGenerate}
            disabled={loading || !!post}
            className="bg-[#66fcf1] cursor-pointer text-[#0b0c10] font-bold w-full py-3 rounded-full shadow-xl hover:shadow-[#66fcf1]/50 transition disabled:opacity-50"
          >
            {loading ? "Generating..." : "Generate Post"}
          </motion.button>
        </motion.div>
      </Tilt>
      {/* Output Section */}
      {post && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-10 max-w-3xl w-full bg-[#0b0c10]/90 border border-[#66fcf1]/30 rounded-3xl p-8 shadow-lg backdrop-blur-lg text-lg text-gray-100 relative z-10"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[#66fcf1]/5 blur-xl opacity-10 rounded-3xl pointer-events-none" />

          <div className="z-10 relative whitespace-pre-line min-h-[120px]">
            {!doneTyping ? (
              <Typewriter
                options={{
                  delay: 10,
                  deleteSpeed: 0,
                  cursor: "",
                  autoStart: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(post)
                    .callFunction(() => setDoneTyping(true))
                    .start();
                }}
              />
            ) : (
              <p>{post}</p>
            )}
          </div>

          <div className="flex flex-wrap gap-4 mt-6 z-10 relative">
            {!saved && (
              <motion.button
                onClick={handleSave}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center cursor-pointer gap-2 px-6 py-2 rounded-full bg-[#66fcf1] text-[#0b0c10] font-semibold shadow hover:shadow-lg transition"
              >
                <Save className="w-6 h-6" />
                
              </motion.button>
            )}

           

            <motion.button
              onClick={() => downloadAsPDF(topic, tone, post)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-full cursor-pointer border border-[#66fcf1] text-[#66fcf1] hover:bg-[#66fcf1]/10 transition"
            >
              Download 
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default GeneratePost;
