import { motion } from "motion/react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MapPinIcon } from "@heroicons/react/24/outline";
import SectionHeading from "./SectionHeading";

const Contact = () => (
  <section
    id="contact"
    className="border-t border-zinc-200 dark:border-zinc-800"
  >
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <SectionHeading index="04" title="Contact" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="rounded-2xl border border-zinc-200 bg-white p-8 text-center dark:border-zinc-800 dark:bg-zinc-900 sm:p-12"
      >
        <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          Let&apos;s build something together
          <span className="text-violet-600 dark:text-violet-400">.</span>
        </h3>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
          Have a project in mind, a role to fill, or just want to say hi?
          I&apos;m open to work — reach out on any of these.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://github.com/Sushant203"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            <FaGithub className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="https://np.linkedin.com/in/sushant-shrestha-78b85a279"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white dark:border-zinc-700 dark:hover:border-white dark:hover:bg-white dark:hover:text-zinc-900"
          >
            <FaLinkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>

        <p className="mt-6 flex items-center justify-center gap-1.5 text-xs text-zinc-500">
          <MapPinIcon className="h-4 w-4" />
          Mid-Baneshwar, Kathmandu — Nepal
        </p>
      </motion.div>
    </div>
  </section>
);

export default Contact;
