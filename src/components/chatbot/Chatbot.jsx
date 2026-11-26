import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { IoMdClose } from "react-icons/io";
import { FaRobot } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

const botResponses = {
  hello: "Hi there! How can I assist you today?",
  hi: "Hello! What can I help you with?",
  "who are you": "I'm a chatbot assistant for Sushant's portfolio website.",
  "what can you do":
    "I can tell you about Sushant's skills, projects, and how to get in touch with him.",
  contact:
    "You can reach Sushant through the Contact section on this page, or via GitHub and LinkedIn.",
  projects:
    "Sushant has worked on projects like an Online Cab Booking System. Check out the Projects section above!",
  skills:
    "Sushant is proficient in React.js, JavaScript, HTML/CSS, and Figma design.",
  experience:
    "Sushant works as a software developer at Gaadi Nepal, with experience across web development and design.",
  open:
    "Sushant is currently open to work opportunities — feel free to reach out via the Contact section!",
  default:
    "I'm not sure about that. Would you like to know about Sushant's projects, skills, or how to contact him?",
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
  const inputRef = useRef(null);

  useEffect(() => {
    // "block: nearest" keeps scrolling inside the chat panel instead of
    // jumping the whole page.
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputMessage.trim()) return;

    const newMessages = [...messages, { type: "user", content: inputMessage }];
    setMessages(newMessages);
    const currentInput = inputMessage;
    setInputMessage("");

    setTimeout(() => {
      setMessages([
        ...newMessages,
        { type: "bot", content: getBotResponse(currentInput) },
      ]);
    }, 500);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex h-[min(30rem,70vh)] w-[min(22rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
            role="dialog"
            aria-label="Chat assistant"
          >
            {/* Chat header */}
            <div className="flex items-center justify-between border-b border-zinc-200 p-4 dark:border-zinc-800">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-100 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400">
                  <FaRobot className="h-4 w-4" />
                </span>
                <h3 className="font-display text-sm font-semibold">
                  Chat Assistant
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-md p-1.5 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
                aria-label="Close chat"
              >
                <IoMdClose className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((message, index) => (
                <motion.div
                  key={`${index}-${message.content.slice(0, 8)}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className={`flex ${
                    message.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      message.type === "user"
                        ? "rounded-br-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                        : "rounded-bl-md bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100"
                    }`}
                  >
                    {message.content}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="border-t border-zinc-200 p-3 dark:border-zinc-800">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputMessage}
                  onChange={(event) => setInputMessage(event.target.value)}
                  placeholder="Type your message..."
                  aria-label="Chat message"
                  className="flex-1 rounded-lg border border-zinc-300 bg-transparent px-3 py-2 text-sm outline-none transition-colors placeholder:text-zinc-400 focus:border-violet-500 dark:border-zinc-700 dark:text-zinc-100 dark:placeholder:text-zinc-500"
                />
                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.9 }}
                  className="rounded-lg bg-zinc-900 p-2.5 text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
                  aria-label="Send message"
                >
                  <IoSend className="h-4 w-4" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* The floating button is hidden while the panel is open — the panel
          has its own close control, plus Escape. */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            type="button"
            onClick={() => setIsOpen(true)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.92 }}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-white shadow-lg transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            aria-label="Open chat assistant"
          >
            <FaRobot className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;
