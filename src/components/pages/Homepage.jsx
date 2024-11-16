import { TechData } from "./home/TechData";

import About from "./home/About";
import Projects from "./home/Projects";
import Hero from "./home/Hero";

const Homepage = () => {
  return (
    <main className="flex flex-col">
      <div>
        <Hero />
      </div>

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
