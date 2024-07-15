import { AiFillPlayCircle } from "react-icons/ai";
import PropTypes from "prop-types";
const Buttons = ({ href }) => {
  //const handleClick = () => {};
  //    const Links = [
  //      { link1: "https://floweranimations.netlify.app/" },
  //      {
  //        link2: "https://simple-calculator123.netlify.app/",
  //      },
  //    ];
  return (
    <section>
      <a href={href} target="_blank">
        <button className="flex items-center gap-2 border bg-inherit text-xl px-2 py-2 rounded-lg animate-pulse hover:animate-none hover:bg-transparent">
          <AiFillPlayCircle className="text-xl" />
          <p className="text-slate-300 ">Live Demo</p>
        </button>
      </a>
    </section>
  );
};
Buttons.propTypes = {
  href: PropTypes.string.isRequired,
};
export default Buttons;
