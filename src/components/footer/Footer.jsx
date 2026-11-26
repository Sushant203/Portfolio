import { FaGithub, FaLinkedin } from "react-icons/fa6";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/Sushant203",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://np.linkedin.com/in/sushant-shrestha-78b85a279",
    icon: FaLinkedin,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 sm:px-6">
        <div className="flex items-center gap-2">
          {socials.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} profile`}
              className="rounded-full p-2 text-zinc-600 transition-colors hover:bg-zinc-200 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
        <p className="text-xs text-zinc-500">
          © {currentYear} Sushant Shrestha. Built with React, Vite & Tailwind
          CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
