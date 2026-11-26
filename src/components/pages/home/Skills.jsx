import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";
import { TechData } from "./TechData";

const Skills = () => (
  <section id="skills" className="border-t border-zinc-200 dark:border-zinc-800">
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <SectionHeading index="02" title="Skills" />

      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {TechData.map((tech) => (
          <motion.li
            key={tech.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="group rounded-xl border border-zinc-200 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-violet-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-violet-500/50"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 transition-colors duration-200 group-hover:bg-violet-100 dark:bg-zinc-800 dark:group-hover:bg-violet-500/10">
              {tech.icon}
            </div>
            <h3 className="mt-4 font-display text-base font-semibold">
              {tech.label}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {tech.description}
            </p>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  </section>
);

export default Skills;
