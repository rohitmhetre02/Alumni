// src/components/ChatBot.jsx
import React, { useState, useRef, useEffect } from "react";
import { FaRobot, FaTimes } from "react-icons/fa";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I’m your AI Career Assistant. Ask me anything about jobs, internships, or alumni." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Mock bot response
  const getBotResponse = (userMessage) => {
    const msg = userMessage.toLowerCase();
    if (msg.includes("job")) return "You can check the latest job openings in our Alumni portal.";
    if (msg.includes("internship")) return "Internships are listed under the Opportunities section.";
    if (msg.includes("alumni")) return "You can connect with alumni through the Alumni Directory.";
    return "Sorry, I can only answer questions about jobs, internships, or alumni.";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input;
    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
    setInput("");
    setLoading(true);

    // Simulate API delay
    setTimeout(() => {
      const botReply = getBotResponse(userMessage);
      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
      setLoading(false);
    }, 800);
  };

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }}>
      {!open && (
        <button className="btn btn-primary rounded-circle p-3 shadow" onClick={() => setOpen(true)}>
          <FaRobot size={24} />
        </button>
      )}

      {open && (
        <div className="card shadow" style={{ width: "300px", height: "400px", display: "flex", flexDirection: "column" }}>
          <div className="card-header d-flex justify-content-between align-items-center">
            <strong>AI Career Assistant</strong>
            <button className="btn btn-sm btn-light" onClick={() => setOpen(false)}>
              <FaTimes />
            </button>
          </div>

          <div className="card-body overflow-auto" style={{ flex: 1, padding: "10px" }}>
            {messages.map((msg, index) => {
              const bgColor = msg.sender === "bot" ? "#f1f1f1" : "#a5d8ff";
              return (
                <div key={index} className="mb-2 p-2 rounded" style={{ maxWidth: "80%", backgroundColor: bgColor, marginLeft: msg.sender === "user" ? "auto" : "0" }}>
                  {msg.text}
                </div>
              );
            })}
            {loading && <div className="mb-2 p-2 rounded bg-light">Typing...</div>}
            <div ref={messagesEndRef} />
          </div>

          <div className="card-footer d-flex">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button className="btn btn-primary" onClick={handleSend} disabled={loading}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
