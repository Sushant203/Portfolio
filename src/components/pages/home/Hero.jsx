import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import mypic from "../../../assets/mypic.jpg";

import { AnimatePresence, motion } from "motion/react";

const Hero = () => {
  const isShow = true;
  return (
    <AnimatePresence>
      {isShow ? (
        <motion.div
          exit={{ opacity: 0 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3 }}
          className="bg-primary w-full py-8"
        >
          <div className="flex flex-col md:flex-row justify-center gap-8 mx-auto items-center">
            <div className="flex flex-col space-y-4 text-left">
              <h1 className="text-6xl text-third font-bold">
                I&apos;m Sushant
              </h1>
              <p className="text-3xl text-third">Frontend Developer</p>
              <p className="text-xl text-third italic">
                &quot;Turning your imagination into interactive reality &quot;
              </p>
              <div className="text-3xl text-white flex gap-6">
                <a href="#" aria-label="Github">
                  <AiFillGithub />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <AiFillLinkedin />
                </a>
                <a href="#" aria-label="Facebook">
                  <AiFillFacebook />
                </a>
              </div>
            </div>
            <div
              style={{
                width: "100px",
                height: "100px",
                backgroundImage: "url('../../../assets/blob.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <img
                src={mypic}
                alt="Sushant"
                height={350}
                width={350}
                className=" shadow-lg  "
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default Hero;
