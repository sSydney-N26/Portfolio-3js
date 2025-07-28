import github from "../assets/tech/github-icon.png"
import resume from "../assets/tech/resume.png"
import linkedin from "../assets/tech/linkedin.png"
import email from "../assets/tech/email-icon.png"
import myresume from "../assets/tech/Sydney_Nguyen_Resume.pdf"
import { motion } from "framer-motion"

export const Nav = (props) => {
    const { onSectionChange, menuOpened, setMenuOpened } = props;
  
    return (
      <>
        <button
          onClick={() => setMenuOpened(!menuOpened)}
          className="z-30 fixed top-4 md:top-4 right-6 md:right-10 p-3 bg-pink-700 w-11 h-11 rounded-md"
        >
          <div
            className={`bg-white h-1 rounded-md w-full transition-all 
            ${
              menuOpened ? "rotate-45  translate-y-1" : ""
            }`}
          />
          <div
            className={`bg-white h-1 rounded-md w-full my-1 ${
              menuOpened ? "hidden" : ""
            }`}
          />
          <div
            className={`bg-white h-1 rounded-md w-full transition-all ${
              menuOpened ? "-rotate-45" : ""
            }`}
          />
        </button>
        <div
          className={`z-10 fixed top-0 right-0 bottom-0 bg-white transition-all overflow-hidden flex flex-col
        ${menuOpened ? "w-full md:w-80" : "w-0"}`}
        >
            <div className="flex-1 flex items-start justify-center flex-col gap-6 p-8">
              <MenuTitles label="About" onClick={() => onSectionChange(0)} />
              <MenuTitles label="Skills" onClick={() => onSectionChange(1)} />
              <MenuTitles label="Experience" onClick={() => onSectionChange(2)} />
              <MenuTitles label="Contact" onClick={() => onSectionChange(4)} />
            </div>

            <div className="flex items-center justify-center gap-4 p-4">
            <MenuIcons
              url="https://github.com/sSydney-N26"
              icon={github}
              label="GitHub"
            />

            <MenuIcons
              url="https://www.linkedin.com/in/sydney-nguyen2609/"
              icon={linkedin}
              label="LinkedIn"
            />

            <MenuIcons
              url="mailto:snmnguye@uwaterloo.ca"
              icon={email}
              label="Email"
            />

            <MenuIcons
              url={myresume}
              icon={resume}
              label="Resume"
            />

          </div>
        </div>
      </>
    );
  };
  
const MenuTitles = (props) => {
  const { label, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="text-2xl font-bold cursor-pointer hover:text-pink-600 transition-colors"
    >
      {label}
    </button>
  );
};

const MenuIcons = (props) => {
  const { url, icon, label } = props;
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-pink-200 transition duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <img src={icon} alt={label} className="w-6 h-6" />
    </motion.a>
  );
};