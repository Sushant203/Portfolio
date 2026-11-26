import { MotionConfig } from "motion/react";
import { ThemeProvider } from "../context/ThemeContext";
import Navbar from "../navbar/Navbar";
import Hero from "../pages/home/Hero";
import About from "../pages/home/About";
import Skills from "../pages/home/Skills";
import Projects from "../pages/home/Projects";
import Contact from "../pages/home/Contact";
import Footer from "../footer/Footer";
import Chatbot from "../chatbot/Chatbot";

function App() {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <div className="min-h-screen bg-zinc-50 text-zinc-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
          <Chatbot />
        </div>
      </MotionConfig>
    </ThemeProvider>
  );
}

export default App;
