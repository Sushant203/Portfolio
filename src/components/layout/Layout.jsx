import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import About from "../pages/home/About";
import Hero from "../pages/home/Hero";
import Projects from "../pages/home/Projects";
import { ThemeProvider } from "../context/ThemeContext";
import Loader from '../layout/loader/Loader';
import Chatbot from "../chatbot/Chatbot";
import Footer from "../footer/Footer";

function App() {
  return (
   <Loader >
     <Router>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Hero />
            <About />
            <Projects />
          </main>
          <Footer />
          <Chatbot />
        </div>
      </ThemeProvider>
    </Router>
   </Loader>
  );
}

export default App;
