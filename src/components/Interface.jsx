import React from "react";
//import { textVariant } from "../utils/motion.js";
import { motion } from "framer-motion";
import { technologies } from "../constants/work.js";
import { BallCanvas } from "./canvas";
//import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
//import 'react-vertical-timeline-component/style.min.css';
import { JobTimeline } from "./WorkExperience.jsx";

const Section = (props) => {
  const { children } = props;

  return (
    <motion.section className="w-screen p-5 ml-10 mr-10 max-w-screen-2xl min-h-screen mx-auto
     flex flex-col items-start justify-center"
     initial={{
        opacity: 0,  // Initially, no scene
        y: 50 // Where it starts fading in
     }}
     whileInView={{
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            delay: 0.5,
        }
     }}>
      {children}
    </motion.section>
  );
};

const EntryPage = () => {
  return (
    <Section>
      <motion.h1 className="text-5xl text-center ml-11 text-gray-900 font-extrabold"
           initial={{
            opacity: 0,  
            y: 25 
         }}
         whileInView={{
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 1,
            }
         }}>
        Hi, I am
        <br />
        <span className="text-4xl font-extrabold text-pink-700 px-1 py-1 bg-white 
        italic inline-block rounded-lg shadow-lg"> Sydney ! </span>
        </motion.h1>
        <motion.p className="text-center text-gray-700 my-5 mx-5 md:text-[15px] sm:text-[10px] xs:text-[12px] text-[10px]"
           initial={{
            opacity: 0,  
            y: 25,
         }}
         whileInView={{
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 1.5,
            }
         }}>
        I am passionate about front-end,
        <br />
        and blockchain development and
        <br />
        am excited to incorporate my
        <br />
        love for creating creative 3D
        <br />
        user experiences at my workplace.
        </motion.p>
        <motion.button className="text-white bg-pink-700 ml-10 py-4 px-12 rounded-lg font-bold text-lg mt-2"
           initial={{
            opacity: 0,
            y: 50 
           }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 1,
                    delay: 2,
                }
            }}> Let's Chat!
        </motion.button>
    </Section>
  );
};


const SkillsSection = () => {
    return (
      <Section>
        <div>
          <p className="text-gray-700 text-lg mr-12"> My Experience </p>
          <h2 className="text-gray-900 font-extrabold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Skills
          </h2>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((technology) => (
            <div className="w-28 mt-5" key={technology.name}>
              <div className="flex flex-col items-center">
                <BallCanvas icon={technology.icon} />
                <motion.div className="mt-2 text-lg font-bold text-gray-700 text-center"
                initial={{
                    opacity: 1,
                }}
                whileInView={{
                    opacity: 1,
                    transition: {
                        duration: 1,
                    }
                }}>
                  {technology.name}
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    );
  };


const ContactsSection = () => {
  return (
    <Section>
      <motion.div>
        <h2 className="text-gray-900 font-extrabold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Contact Me
        </h2>
        <div className="mt-5 p-8 rounded-md bg-pink-100 w-80 max-w-full">
            <form>
                <label for="name" className="font-semibold text-gray-900 block mb-1">
                    Name
                </label>
                <input type="text" name="name" id="name" 
                // Ring-1 means applying border/ring around element with width of 1px
                 className="block w-full rounded-md border-0 text-gray-900 show-sm ring-1 ring-inset
                  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                  focus:ring-indigo-600 p-3" /> 
                  
                 <label for="email" className="font-semibold text-gray-900 block mb-1 mt-10">
                    Email
                 </label>
                 <input type="email" name="email" id="email" className="block w-full rounded-md border-0 
                 text-gray-900 show-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3">
                 </input>
                 <label for="email" className="font-semibold text-gray-900 block mb-1 mt-8">
                    Message
                 </label>
                 <textarea name="message" id="message" className="h-32 block w-full rounded-md
                 border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3" />

                 <button className="bg-pink-200 text-gray-900 py-5 px-8 rounded-lg
                 font-bold text-lg mt-10">
                    Submit
                 </button>
            </form>

        </div>
      </motion.div>
    </Section>
  );
};

const Work = () => {
  return (
    <Section>
      <JobTimeline />
    </Section>
  )
}

export const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <EntryPage />
      <Work />
      <SkillsSection />
      <ContactsSection />
    </div>
  );
};