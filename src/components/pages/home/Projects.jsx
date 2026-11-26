import { motion } from "motion/react";
import { FaArrowRight, FaGithub } from "react-icons/fa6";
import SectionHeading from "./SectionHeading";
import cbs from "../../../assets/cbs.png";

const projects = [
  {
    title: "Online Cab Booking System",
    description:
      "Worked on this project as a frontend developer, building the interface and design. It lets users book a cab for a ride, or register themselves as a cab driver.",
    image: cbs,
    alt: "Screenshot of the Online Cab Booking System web app",
    tags: ["Frontend", "UI & Design"],
  },
];

const Projects = () => (
  <section
    id="projects"
    className="border-t border-zinc-200 dark:border-zinc-800"
  >
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <SectionHeading index="03" title="Projects" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-200 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:shadow-zinc-900"
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.alt}
                loading="lazy"
                width={1877}
                height={858}
                className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-xl font-semibold">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}

        {/* More work on GitHub */}
        <motion.a
          href="https://github.com/Sushant203?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-zinc-300 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-violet-400 hover:bg-violet-50 dark:border-zinc-700 dark:hover:border-violet-500/60 dark:hover:bg-violet-500/5"
        >
          <FaGithub className="h-8 w-8 text-zinc-400 transition-colors group-hover:text-violet-600 dark:group-hover:text-violet-400" />
          <div>
            <p className="font-display text-lg font-semibold">
              More on GitHub
            </p>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              47 public repositories to explore
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-600 dark:text-violet-400">
            View repositories
            <FaArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </span>
        </motion.a>
      </div>
    </div>
  </section>
);

export default Projects;
