import React from "react";
//import { textVariant } from "../utils/motion.js";
import { motion } from "framer-motion";
import { technologies } from "../constants/work.js";
import { BallCanvas } from "./canvas";
//import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
//import 'react-vertical-timeline-component/style.min.css';
import { JobTimeline } from "./WorkExperience.jsx";

const Section = (props) => {
  const { children, mobileTop } = props;

  return (
    <motion.section className={`w-screen p-5 ml-10 mr-10 max-w-screen-2xl min-h-screen mx-auto
     flex flex-col items-start
     ${mobileTop ? "justify-start md:justify-center" : "justify-center"}`}
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

const EntryPage = (props) => {
  const { setSection } = props; 
  return (
    <Section mobileTop>
      <motion.h1 className="lg:text-6xl md:text-5xl text-4xl text-center ml-11 md:ml-20 text-gray-900 font-extrabold"
           initial={{
            opacity: 0,  
            y: 25 
         }}
         whileInView={{
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 0.5,
            }
         }}>
        Hi, I am
        <br />
        <span className="lg:px-2 lg:py-2 md:text-4xl text-3xl font-extrabold text-pink-700 px-1 py-1
        bg-white italic inline-block rounded-lg shadow-lg">  Sydney ! </span>
        </motion.h1>
        <motion.p className="lg:text-[14px] lg:my-3 lg:mx-5
        md:my-4 md:mx-11 text-center text-gray-800 my-5 mx-10  
        md:text-[12px] sm:text-[10px] xs:text-[10px] text-[12px]"
           initial={{
            opacity: 0,  
            y: 25,
         }}
         whileInView={{
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.75,
                delay: 1,
            }
         }}>
         
        <br />
        I am a 3rd year Honours Computer Science,    
        <br />
        and BusinessAdministration Double Degree     
        <br />
        student at UWaterloo and Wilfrid Laurier  
        <br />
        University. I am drawn to 3D and AR 
        <br />
        development, and would love to gain experience 
        <br />
        in AI/ML in the near future. I have experience 
        <br />
        working in Web Development & Cybersecurity, 
        <br/>
        especially agent-based security development.
        
        </motion.p>
        <motion.button 
          onClick={() => setSection(6)}
          className="lg:ml-26 lg:py-4 lg:px-16 lg:my-6
          text-white bg-pink-700 ml-20 
          py-3 px-12 rounded-lg font-bold text-lg mt-3"
           initial={{
            opacity: 0,
            y: 50 
           }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 1,
                    delay: 1.5,
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
          <motion.p className="text-gray-700 text-lg mr-12"
            initial={{
              opacity: 0,  
              y: 25,
          }}
          whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                  duration: 0.75,
                  delay: 0.75,
              }
          }}>
              What I Have Worked With
          </motion.p>

          <motion.h1 className="text-gray-900 font-extrabold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"
          initial={{
            opacity: 0,
            y: 50
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.75,
              delay: 1,
            }
          }}>
            Skills
          </motion.h1>

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

export const Interface = (props) => {
  const { setSection } = props;
  return (
    <div className="flex flex-col items-center w-screen">
      <EntryPage setSection={ setSection } />
      <SkillsSection/>
      <Work />
      <ContactsSection />
    </div>
  );
};