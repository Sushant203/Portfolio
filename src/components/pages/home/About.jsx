import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";

const stats = [
  { value: "47", label: "Public repositories" },
  { value: "Gaadi Nepal", label: "Software developer at" },
  { value: "Open", label: "To opportunities" },
];

const About = () => (
  <section id="about" className="border-t border-zinc-200 dark:border-zinc-800">
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <SectionHeading index="01" title="About" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="grid gap-10 md:grid-cols-[2fr_1fr]"
      >
        <div className="space-y-4 text-base leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-lg">
          <p>
            Hello — I&apos;m Sushant, a full stack developer with a keen eye
            for design and user experience. I specialize in building modern
            web applications that are both beautiful and functional.
          </p>
          <p>
            From sketching interfaces in Figma to writing the front end and
            shipping it to production, I care about the whole journey a
            product takes — not just one layer of it.
          </p>
        </div>

        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-1">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-zinc-200 bg-white p-4 transition-colors duration-200 hover:border-violet-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-violet-500/50"
            >
              <dt className="text-xs uppercase tracking-wide text-zinc-500">
                {stat.label}
              </dt>
              <dd className="mt-1 font-display text-lg font-semibold">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </motion.div>
    </div>
  </section>
);

export default About;
