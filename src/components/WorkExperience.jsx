import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from "framer-motion"

export const JobTimeline = () => {
    return (
        <>
        <motion.p className="text-gray-700 lg:text-lg md:text-base mr-12"
           initial={{
            opacity: 0,  
            y: 25,
         }}
         whileInView={{
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 1,
            }
         }}>
            What I Have Done So Far
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
            delay: 1.5,
          }
        }}>
          Work Experience
        </motion.h1>
         <div className="mx-auto py-1">
            <VerticalTimeline layout="2-columns" lineColor="rgb(157 23 77)">
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    lineColor="rgb(157 23 77)"
                    contentStyle={{ 
                        background: "rgb(255, 218, 233)", 
                        color: "rgb(68 64 60)",
                        fontSize: "12px"
                    }}
                    contentArrowStyle={{ 
                        borderRight: "12px solid rgb(255, 218, 233)" 
                    }}
                    iconStyle={{ 
                        background: "rgb(157 23 77)", 
                        color: "text-white", 
                        alignItems: "center",
                        justifyContent: "center",

                    }}
                    icon={<i className="fas fa-code" />}
                >
                <div className="flex flex-row justify-between">               
                    <h3 className="font-bold mb-1 text-lg"> 
                        Web Developer 
                    </h3>
                    <h4 className="text-right font-normal italic"> July - Present 2023 </h4>
                </div>
                <h3 className="mb-2 italic"> Vision Capital Corporation </h3>
                <div className="text-gray-800 md:text-[12px]">
                    <ul className="list-disc pl-5"> 
                        <li className="mb-2">
                        Enhanced policy disclosures through website changes for 
                        Vision Capital, an investment fund managing $159+ million.
                        </li>
                        <li className="mb-2">
                        Returned proprietary code control to Vision Capital by migrating
                        codebase from AWS to Netlify and configured the 
                        appropriate Node.js version for future local development.
                        </li>
                        <li className="mb-2">
                        Reduced invalid private funds access by creating Vue.js
                        pages that certifies investor accreditation.
                        </li>
                        <li>
                        Improved marketing team efficiency by integrating Prismic API 
                        (a content management system),
                        enabling website layout modifications without code.
                        </li>
                    </ul>
                </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    lineColor="rgb(157 23 77)"
                    contentStyle={{ 
                        background: "rgb(255, 218, 233)", 
                        color: "rgb(68 64 60)",
                        fontSize: "12px"
                    }}
                    contentArrowStyle={{ 
                        borderRight: "12px solid rgb(255, 218, 233)" 
                    }}
                    iconStyle={{ 
                        background: "rgb(157 23 77)", 
                        color: "text-white", 
                        width: " 40px",
                        height: "40px"
                    }}
                    icon={<i className="fas fa-code" />}
                >
                <div className="flex flex-row justify-between">               
                    <h3 className="font-bold mb-1 text-lg"> 
                    Microsoft - Finance Project: Financial Investment Coach
                    </h3>
                    <h4 className="text-right font-normal italic"> June - August 2023 </h4>
                </div>
                <h3 className="mb-2 italic"> 
                    Waterloo Experience Accelerate Program - Microsoft Azure & AI Fundamentals
                </h3>
                <div className="text-gray-800 md:text-[12px]">
                    <ul className="list-disc pl-5"> 
                        <li className="mb-2">
                        Improved financial decision-making skills of young adults by developing 
                        and pitching a financial investment coach using Microsoft Azure Machine
                        Learning and Microsoft Azure Bot Services.
                        </li>
                        <li className="mb-2">
                        Optimized the data preprocessing process by leveraging Azure Machine Learning modules,
                        including Normalized Data & Clean Missing Data.
                        </li>
                        <li>
                        Achieved an Outstanding work-term rating from our lead technical mentor
                        through effectively coordinating remote team efforts.
                        </li>
                    </ul>
                </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    lineColor="rgb(157 23 77)"
                    contentStyle={{ 
                        background: "rgb(255, 218, 233)", 
                        color: "rgb(68 64 60)",
                        fontSize: "12px"
                    }}
                    contentArrowStyle={{ 
                        borderRight: "12px solid rgb(255, 218, 233)" 
                    }}
                    iconStyle={{ 
                        background: "rgb(157 23 77)", 
                        color: "text-white" 
                    }}
                    icon={<i className="fas fa-code" />}
                >
                <div className="flex flex-row justify-between">               
                    <h3 className="font-bold mb-1 text-lg"> 
                        Lead Teaching Assistant
                    </h3>
                    <h4 className="text-right font-normal italic"> February 2021 - July 2022 </h4>
                </div>
                <h3 className="mb-2 italic"> 
                    Mathstronauts
                </h3>
                <div className="text-gray-800 md:text-[12px]">
                    <ul className="list-disc pl-5"> 
                        <li className="mb-2">
                        Mentored and coached 50+ middle-school students in multiple virtual
                        programs on programming, game development, 3D modelling, and graphic design,
                        resulting in 100% certification achieved.
                        </li>
                        <li className="mb-2">
                        Guided students in creating high-quality projects in Python, including a Weather App,
                        Alien vs Society Game, and Satellite Shooting Game.
                        </li>
                        <li>
                        Effectively managed a team of 15 Teaching Assistants on a weekly basis, ensuring
                        seamless lecture delivery and prompt resolution of student concerns.
                        </li>
                    </ul>
                </div>
                </VerticalTimelineElement>
            </VerticalTimeline >
        </div>
        </>
    );
};


