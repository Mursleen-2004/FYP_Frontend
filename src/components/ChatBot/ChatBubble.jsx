import { useState } from "react";
import ChatWindow from "./ChatWindow";
import { MessageCircle } from "lucide-react";

export default function ChatBubble() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Chat Window */}
      <div className="z-30">
        <ChatWindow isOpen={open} onClose={() => setOpen(false)} />
      </div>

      {/* Chat Bubble Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 z-40 cursor-pointer bg-[#F49867] p-3 rounded-full shadow-lg hover:scale-105 transition"
      >
        <MessageCircle className="text-black w-6 h-6" />
      </button>
    </>
  );
}
