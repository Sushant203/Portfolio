import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoFigma, IoLogoReact } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";

export const TechData = [
  {
    id: 1,
    icon: <AiFillHtml5 className="h-7 w-7 text-[#E34F26]" />,
    label: "HTML & CSS",
    description:
      "Semantic markup and modern CSS for clean, responsive layouts.",
  },
  {
    id: 2,
    icon: <IoLogoJavascript className="h-7 w-7 text-[#F7DF1E]" />,
    label: "JavaScript",
    description:
      "Interactive, client-side experiences built with modern JavaScript.",
  },
  {
    id: 3,
    icon: <IoLogoReact className="h-7 w-7 text-[#61DAFB]" />,
    label: "React.js",
    description:
      "Component-driven user interfaces built with hooks and state.",
  },
  {
    id: 4,
    icon: <IoLogoFigma className="h-7 w-7 text-[#1ABCFE]" />,
    label: "Figma",
    description:
      "Wireframes and polished interface designs before any code is written.",
  },
];
