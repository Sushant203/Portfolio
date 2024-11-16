import { TechData } from "./home/TechData";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import mypic from "../../assets/mypic.jpg";
import About from "./home/About";
import Projects from "./home/Projects";

import { motion } from "motion/react";

const Homepage = () => {
  return (
    <main className="flex flex-col">
      {/* Hero section */}
      <motion.div
        initial={false}
        translate=""
        transition={{ duration: 3 }}
        className="bg-primary w-full py-8"
      >
        <div className="flex flex-col md:flex-row justify-center gap-8 mx-auto items-center">
          <div className="flex flex-col space-y-4 text-left">
            <h1 className="text-6xl text-third font-bold">I&apos;m Sushant</h1>
            <p className="text-3xl text-third">Frontend Developer</p>
            <p className="text-xl text-third italic">
              &quot;Turning your imagination into interactive reality &quot;
            </p>
            <div className="text-3xl text-white flex gap-6">
              <a href="#" aria-label="Github">
                <AiFillGithub />
              </a>
              <a href="#" aria-label="LinkedIn">
                <AiFillLinkedin />
              </a>
              <a href="#" aria-label="Facebook">
                <AiFillFacebook />
              </a>
            </div>
          </div>
          <img
            src={mypic}
            alt="Sushant"
            height={350}
            width={350}
            className="rounded-md shadow-lg shadow-slate-300"
          />
        </div>
      </motion.div>
      {/* Hero section ends */}

      <section className="bg-secondary flex flex-col py-3 gap-2">
        <h1 className="text-center sm:text-center lg:text-left text-5xl font-bold py-2 text-third ml-4">
          Tech Stack
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-2">
          {TechData.map((val) => (
            <div
              key={val.id}
              className="flex flex-col items-center gap-4 px-4 py-1"
            >
              <p className="text-6xl">{val.icons}</p>
              <h2 className="text-2xl font-serif">{val.label}</h2>
              <div className="max-h-10 overflow-y-auto w-fit hide-scrollbar">
                <p className="text-sm text-slate-700 text-center first-letter:capitalize">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <About />
      <Projects />
    </main>
  );
};

export default Homepage;
