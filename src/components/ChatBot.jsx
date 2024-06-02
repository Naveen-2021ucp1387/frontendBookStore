import React, { useState, useRef, useEffect } from "react";

function ChatBot() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: "incoming", text: "Hi there 👋\nHow can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const chatboxRef = useRef(null);
  const chatInputRef = useRef(null);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = () => {
    if (input.trim()) {
      const newUserMessage = { type: "outgoing", text: input };
      setMessages((prevMessages) => [...prevMessages, newUserMessage]);
      setInput("");

      const thinkingMessage = { type: "incoming", text: "Thinking..." };
      setMessages((prevMessages) => [...prevMessages, thinkingMessage]);

      setTimeout(() => {
        const errorMessage = {
          type: "incoming",
          text: `Sorry, your limit has been\n exhausted for the free plan.`,
        };

        setMessages((prevMessages) => [
          ...prevMessages.slice(0, -1),
          errorMessage,
        ]);
      }, 2000);
    }
  };

  useEffect(() => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="z-50">
      <button
        className="fixed bottom-8 right-9 h-12 w-12 flex items-center justify-center rounded-full bg-purple-600 transition-transform duration-200 ease-in-out z-50"
        onClick={toggleChat}
      >
        <span className="material-icons text-white">
          {isChatOpen ? "close" : "mode_comment"}
        </span>
      </button>
      {isChatOpen && (
        <div className="fixed right-9 bottom-24 w-105 bg-white rounded-lg shadow-xl transform transition-all duration-100 ease-in-out scale-100 z-50">
          <header className="relative text-center text-white bg-purple-600 p-4 rounded-t-lg shadow-md">
            <h2 className="text-lg">Chatbot</h2>
            <span
              className="material-icons absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={toggleChat}
            >
              close
            </span>
          </header>
          <ul ref={chatboxRef} className="overflow-y-auto h-128 p-8 pb-24">
            {messages.map((message, index) => (
              <li
                key={index}
                className={`flex list-none mb-5 ${
                  message.type === "outgoing" ? "justify-end" : ""
                }`}
              >
                {message.type === "incoming" && (
                  <span className="material-icons w-8 h-8 flex items-center justify-center text-white bg-purple-600 rounded mr-2">
                    smart_toy
                  </span>
                )}
                <p
                  className={`whitespace-pre-wrap p-4 rounded-lg max-w-3/4 text-sm ${
                    message.type === "incoming"
                      ? "bg-gray-200 text-black rounded-bl-lg"
                      : "bg-purple-600 text-white rounded-br-lg"
                  }`}
                >
                  {message.text}
                </p>
              </li>
            ))}
          </ul>
          <div className="flex gap-2 items-center p-3 border-t rounded-b-lg">
            <textarea
              ref={chatInputRef}
              className="h-14 w-full bg-white text-black border-none resize-none p-3 text-sm rounded-lg"
              placeholder="Enter a message..."
              spellCheck="false"
              required
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            ></textarea>
            <span
              className={`material-icons text-purple-600 cursor-pointer ${
                input.trim() ? "visible" : "invisible"
              }`}
              onClick={handleSendMessage}
            >
              send
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatBot;
