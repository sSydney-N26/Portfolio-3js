import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from "framer-motion"



export const JobTimeline = () => {
    return (
        <>
        <motion.p className="text-gray-700 text-lg mr-12"
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

        <motion.h1 className="text-gray-900 font-extrabold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"
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
         <div className="max-w-screen-md mx-auto py-2 ">
            <VerticalTimeline layout="1-column" lineColor="rgb(157 23 77)">
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    lineColor="rgb(157 23 77)"
                    contentStyle={{ 
                        background: "rgb(255, 218, 233)", 
                        color: "rgb(68 64 60)",
                        fontSize: "14px"
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
                    <h3 className="font-bold mb-2 text-lg"> 
                        Web Developer 
                    </h3>
                    <h4 className="text-right font-normal italic"> July - Present 2023 </h4>
                </div>
                <h3 className="mb-2 italic"> Vision Capital Corporation </h3>
                <ul className="list-disc pl-5"> 
                    <li className="mb-2">
                    Collaborated with the former technical lead to execute a code 
                    repository migration from AWS to Netlify and configured the 
                    appropriate Node.js version for future local development.
                    </li>
                    <li className="mb-2">
                    Created a terms acceptance page for private funds' investors
                     using Vue.js and its directives.
                    </li>
                    <li>
                    Improved efficiency by 25% through exporting local website
                    components to Prismic, a Content Management System
                    using Prismic's API. This enabled our marketing team to create
                    pages without coding experience.
                    </li>
                    </ul>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    lineColor="rgb(157 23 77)"
                    contentStyle={{ 
                        background: "rgb(255, 218, 233)", 
                        color: "rgb(68 64 60)",
                        fontSize: "14px"
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
                <ul className="list-disc pl-5"> 
                    <li className="mb-2">
                        Utilized the freemium business model, Microsoft Azure Machine Learning and Microsoft Azure
                        Bot Services to develope a financial advisor service called MoneyMastermind.
                    </li>
                    <li className="mb-2">
                    Utilized Microsoft Azure Machine Learning modules, including Normalized Data and Cleaning Data,
                    to streamline the data preprocessing process, yielding a notable time optimization of 25%.
                    </li>
                    <li>
                        Coordinated remote team efforts, achieving a project success rate of 100%
                        and earning an Outstanding rating from our lead technical mentor.
                    </li>
                    </ul>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    lineColor="rgb(157 23 77)"
                    contentStyle={{ 
                        background: "rgb(255, 218, 233)", 
                        color: "rgb(68 64 60)",
                        fontSize: "14px"
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
                </VerticalTimelineElement>
            </VerticalTimeline >
        </div>
        </>
    );
};


