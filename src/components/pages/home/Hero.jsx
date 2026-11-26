import { motion } from "motion/react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import mypic from "../../../assets/mypic.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.5, ease: "easeOut" },
  }),
};

const Hero = () => (
  <section id="top" className="flex min-h-screen items-center">
    <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-24 sm:px-6 md:grid-cols-[1.2fr_1fr] md:py-28">
      <div>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="mb-4 font-display text-sm font-medium uppercase tracking-[0.3em] text-violet-600 dark:text-violet-400"
        >
          Full Stack Developer
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
        >
          Sushant Shrestha
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="mt-6 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg"
        >
          I design and build clean, functional web applications — from
          pixel-perfect interfaces to the code that powers them. Based in
          Kathmandu, Nepal.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-zinc-300 px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white dark:border-zinc-700 dark:hover:border-white dark:hover:bg-white dark:hover:text-zinc-900"
          >
            Get in Touch
          </a>

          <div className="flex items-center gap-1">
            <a
              href="https://github.com/Sushant203"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="rounded-full p-2 text-zinc-600 transition-colors hover:bg-zinc-200 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href="https://np.linkedin.com/in/sushant-shrestha-78b85a279"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="rounded-full p-2 text-zinc-600 transition-colors hover:bg-zinc-200 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
        className="mx-auto w-full max-w-sm md:justify-self-end"
      >
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-3 rounded-3xl border border-violet-300 dark:border-violet-500/40"
          />
          <img
            src={mypic}
            alt="Portrait of Sushant Shrestha"
            width={480}
            height={600}
            loading="eager"
            className="aspect-[4/5] w-full rounded-2xl object-cover"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
