import React from "react";
import { motion } from "framer-motion";
import { technologies } from "../constants/work.js";
import { BallCanvas } from "./canvas";
import { JobTimeline } from "./WorkExperience.jsx";
import github from "../assets/tech/github.png"
import resume from "../assets/tech/url.png"
import linkedin from "../assets/tech/linkedin.webp"
import email from "../assets/tech/email.png"
import myresume from "../assets/tech/Sydney_Nguyen_Resume.pdf"


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
      <motion.h1 className="lg:text-6xl md:text-4xl text-4xl text-center ml-20
                            lg:mt-0 md:mt-0 mt-10 md:mx-20 text-gray-900 
                            font-extrabold"
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
                        bg-white italic inline-block rounded-lg shadow-lg md:mx-3 md:mt-3"> Sydney ! </span>
        </motion.h1>

        <motion.p className="lg:text-[14px] lg:my-3 lg:mx-11
        md:my-3 md:mx-15 text-center text-gray-800 my-5 mx-10  
        md:text-[12px] sm:text-[11px] xs:text-[11px] text-[11px]"
           initial={{
            opacity: 0,  
            y: 25,
         }}
         whileInView={{
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 1.0,
            }
         }}>
         
        <br />
        I’m a third‑year Honours Computer Science
        <br /> 
        and Business Administration double‑degree 
        <br />
        student at the University of Waterloo and 
        <br />
        Wilfrid Laurier University. As an 3D/AR enthusiast,
        <br />
        I’ve built web apps and agent‑based cybersecurity
        <br />
        tools and most recently spent four months at Shopify
        <br />
        across two teams, building large‑scale device
        <br />
        security workflows and dived into mobile
        <br />
        development as well. Now I’m eager to deepen
        <br />
        my AI/ML knowledge and tackle the next
        <br />
        frontier of immersive experiences.
        
        </motion.p>

        <motion.button 
          onClick={() => setSection(5)}
          className="lg:ml-26 lg:py-4 lg:px-16 lg:my-6
          text-white bg-pink-700 mx-20 md:my-3
          py-3 px-8 rounded-lg font-bold text-lg md:mx-30 md:py-3 md:px-12"
           initial={{
            opacity: 0,
            y: 25 
           }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.5,
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
          <motion.p className="text-gray-700 lg:text-lg md:text-base sm:text-sm mr-12"
            initial={{
              opacity: 0,  
              y: 25,
          }}
          whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                  duration: 0.75,
                  delay: 0.5,
              }
          }}>
              What I Have Worked With
          </motion.p>

          <motion.h1 className="text-gray-900 font-extrabold lg:text-[55px] md:text-[40px] sm:text-[30px] xs:text-[30px] text-[30px]"
          initial={{
            opacity: 0,
            y: 50
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              delay: 0.75,
            }
          }}>
            Skills
          </motion.h1>

        </div>
        <div className="flex flex-row flex-wrap justify-center gap-5">
          {technologies.map((technology) => (
            <div className="w-28 mt-2" key={technology.name}>
              <div className="flex flex-col items-center">
                <BallCanvas icon={technology.icon} />
                <motion.div className="md:text-base font-bold text-gray-700 text-center"
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
      <section className="flex flex-col items-center justify-center lg:my-20 md:py-5">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="text-center mb-5"
        >
          <h2 className="text-gray-900 font-extrabold md:text-[40px] sm:text-[25px] xs:text-[25px] text-[30px]">
            CONTACT ME
          </h2>
          <p className="text-gray-600 md:text-lg sm:text-md text-sm">
            You might find these helpful!
          </p>
        </motion.div>
  
        {/* Contact Platforms */}
        <div className="flex flex-col md:flex-row md:gap-6 gap-3">
          <ContactCard
            icon={email}
            label="E-mail"
            url="mailto:snmnguye@uwaterloo.ca"
            bgColor="bg-white"
          />
          <ContactCard
            icon={linkedin}
            label="LinkedIn"
            url="https://www.linkedin.com/in/sydney-nguyen2609/"
            bgColor="linkedin"
          />
          <ContactCard
            icon={github}
            label="Github"
            url="https://github.com/sSydney-N26"
            bgColor="bg-purple-600"
          />
          <ContactCard
            icon={resume}
            label="Resume"
            url={myresume}
            bgColor="bg-white"
          />
        </div>
      </section>
    );
  };
  
  const ContactCard = ({ icon, label, url, bgColor }) => {
    return (
      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center p-5 bg-gray-100 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className={`flex items-center justify-center w-8 h-8 rounded-full text-white ${bgColor} mr-4`}>
          <img src={icon} alt={label} className="w-full h-full object-cover rounded-full" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{label}</h3>
        </div>
      </motion.a>
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
