import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ThemeToggle from "./ThemeToggle";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scrolling behind the open mobile menu.
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Scroll-spy: highlight the section currently in view.
  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter(Boolean);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Dim overlay + tap-catcher. Rendered OUTSIDE the header because
          the header's backdrop-filter creates a containing block that would
          shrink a fixed child to the header's own height. z-40 keeps it
          below the header but above the page. */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-zinc-950/40 dark:bg-black/60 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || isOpen
            ? "border-b border-zinc-200/70 bg-zinc-50/90 backdrop-blur-md dark:border-zinc-800/70 dark:bg-zinc-950/90"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav
          className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
          aria-label="Main navigation"
        >
          <a
            href="#top"
            className="font-display text-lg font-semibold tracking-tight"
            aria-label="Back to top"
          >
            Sushant Shrestha
            <span className="text-violet-600 dark:text-violet-400">.</span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-zinc-900 dark:text-white"
                      : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-violet-600 dark:bg-violet-400"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              );
            })}
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              className="inline-flex items-center justify-center rounded-md p-2 text-zinc-700 transition-colors hover:bg-zinc-200/70 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden border-b border-zinc-200/70 bg-zinc-50/95 backdrop-blur-md dark:border-zinc-800/70 dark:bg-zinc-950/95 md:hidden"
            >
              <div className="space-y-1 px-4 pb-4 pt-1 sm:px-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(event) => {
                      // Take full control of the navigation: the default
                      // anchor jump can be cancelled while the menu exit
                      // animation and scroll-lock teardown are in flight.
                      event.preventDefault();
                      // Release the scroll lock before scrolling.
                      document.body.style.overflow = "";
                      setIsOpen(false);
                      // Wait for the menu exit animation (0.25s) to finish
                      // before starting the smooth scroll — programmatic
                      // smooth scrolls started during the exit animation
                      // are dropped by the browser.
                      const MENU_EXIT_MS = 300;
                      window.setTimeout(() => {
                        document
                          .getElementById(item.href.slice(1))
                          ?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                      }, MENU_EXIT_MS);
                      window.history.pushState(null, "", item.href);
                    }}
                    className={`block rounded-lg px-3 py-2 text-base font-medium transition-colors ${
                      activeSection === item.href.slice(1)
                        ? "bg-violet-100 text-violet-800 dark:bg-violet-500/10 dark:text-violet-300"
                        : "text-zinc-700 hover:bg-zinc-200/70 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
