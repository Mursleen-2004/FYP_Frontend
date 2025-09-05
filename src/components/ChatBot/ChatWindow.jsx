import { useState } from "react";
import axios from "axios";

export default function ChatWindow({ isOpen, onClose }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    try {
      const res = await axios.post("http://localhost:4000/api/chat", {
        question: input,
      });

      const botText = res.data.answer;
      let currentText = "";
      const typingSpeed = 35; 

      let i = 0;
      const interval = setInterval(() => {
        if (i < botText.length) {
          currentText += botText[i];
          i++;

          setMessages((prev) => {
            const updated = [...prev];
            const lastMsg = updated[updated.length - 1];
            if (lastMsg?.sender === "bot") {
              updated[updated.length - 1] = { ...lastMsg, text: currentText };
            } else {
              updated.push({ sender: "bot", text: currentText });
            }
            return updated;
          });
        } else {
          clearInterval(interval);
        }
      }, typingSpeed);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Sorry, something went wrong!" },
      ]);
    }

    setInput("");
  };

  return (
    <div
      className={`fixed bottom-20 z-20 right-4 bg-white border rounded-lg w-80 shadow-lg ${
        !isOpen ? "hidden" : ""
      }`}
    >
      <div className="p-3 border-b flex justify-between items-center bg-[#0b0c10] text-white rounded-t-lg">
        <span>Content Genius Bot</span>
        <button onClick={onClose} className='cursor-pointer'>X</button>
      </div>

      <div className="p-3 h-64 overflow-y-auto space-y-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`text-${msg.sender === "user" ? "right" : "left"}`}
          >
            <span
              className={`inline-block px-3 py-2 rounded max-w-full break-words ${
                msg.sender === "user" ? "bg-blue-100" : "bg-gray-100"
              }`}
            >
              {msg.text}
              {/*  blinking cursor during bot typing */}
              {msg.sender === "bot" &&
                i === messages.length - 1 &&
                msg.text.length > 0 &&
                msg.text.length < 1000 && (
                  <span className="animate-pulse ml-1">|</span>
                )}
            </span>
          </div>
        ))}
      </div>

      <div className="p-2 border-t flex">
        <input
          className="flex-1 border px-2 py-1 rounded-l outline-none"
          placeholder="Ask a question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          className="bg-[#F49867] cursor-pointer hover:scale-105 transition-all duration-300 font-bold text-black px-3 rounded-r"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}
