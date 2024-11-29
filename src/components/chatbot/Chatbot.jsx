import { useState, useRef, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { FaRobot } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content: "Hi! I'm Sushant's assistant. How can I help you today?",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const botResponses = {
    "hello": "Hi there! How can I assist you today?",
    "hi": "Hello! What can I help you with?",
    "who are you": "I'm a chatbot assistant for Sushant's portfolio website.",
    "what can you do": "I can provide information about Sushant's skills, projects, and help you navigate the website.",
    "contact": "You can contact Sushant through the contact form above or via email.",
    "projects": "Sushant has worked on various projects including web development and design. Check out the projects section above!",
    "skills": "Sushant is proficient in React.js, JavaScript, HTML/CSS, and various other web technologies.",
    "experience": "Sushant has experience in web development and design, working on various projects.",
    "default": "I'm not sure about that. Would you like to know about Sushant's projects, skills, or how to contact him?"
  };

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    for (const [key, value] of Object.entries(botResponses)) {
      if (message.includes(key)) {
        return value;
      }
    }
    return botResponses.default;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    const newMessages = [
      ...messages,
      { type: "user", content: inputMessage },
    ];
    setMessages(newMessages);
    setInputMessage("");

    // Add bot response with a slight delay
    setTimeout(() => {
      setMessages([
        ...newMessages,
        { type: "bot", content: getBotResponse(inputMessage) },
      ]);
    }, 500);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gray-900 text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition-all duration-200"
        >
          <FaRobot className="text-2xl" />
        </button>
      )}

      {isOpen && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-80 md:w-96 h-[500px] flex flex-col">
          {/* Chat Header */}
          <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
            <div className="flex items-center gap-2">
              <FaRobot className="text-xl text-gray-700 dark:text-gray-300" />
              <h3 className="font-semibold text-gray-800 dark:text-white">Chat Assistant</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <IoMdClose className="text-xl" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.type === "user"
                      ? "bg-gray-900 text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t dark:border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 dark:bg-gray-700 dark:text-white"
              />
              <button
                type="submit"
                className="bg-gray-900 text-white p-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <IoSend className="text-xl" />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
