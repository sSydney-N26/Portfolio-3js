import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from "framer-motion"
import trend from "../assets/tech/trend.png"
import waterloo from "../assets/tech/waterloo.png"
import vision from "../assets/tech/vision.png"

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
                        background: "rgb(255, 255, 255)", 
                        color: "text-white" 
                    }}
                    icon={
                        <img 
                          src={trend}
                          alt="icon" 
                          className="w-full h-full object-cover rounded-full"
                        />
                    }
                >
                <div className="flex flex-row justify-between">               
                    <h3 className="font-bold mb-1 text-lg"> 
                        Software Developer
                    </h3>
                    <h4 className="text-right font-normal italic"> January 2024 - May 2024 </h4>
                </div>
                <h3 className="mb-2 italic"> 
                    Trend Micro
                </h3>
                <div className="text-gray-800 md:text-[12px]">
                    <ul className="list-disc pl-5"> 
                        <li className="mb-2">
                        Developed a caching mechanism for the Application Control product to enforce security rules on specified users using C++.
                        </li>
                        <li className="mb-2">
                        Facilitated cross-team collaboration to detect & generate new security events on Workload Security’s GUI using Java.
                        </li>
                        <li>
                        Enhanced builds’ quality by automating Jenkins regression tests for all new builds & integrated results as a GitHub status check.
                        </li>
                        <li>
                        Enabled developers to automate builds’ performance results by maintaining Python test scripts & deploying AWS resources.
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
                        background: "rgb(255 255 255)", 
                        color: "text-white", 
                        alignItems: "center",
                        justifyContent: "center",

                    }}
                    icon={
                        <img 
                          src={vision} 
                          alt="icon" 
                          className="w-full h-full object-cover rounded-full"
                        />
                    }
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
                        Enhanced policy transparency by implementing cookie policies for Vision Capital, an investment fund managing $159+ million.
                        </li>
                        <li className="mb-2">
                        Returned proprietary code control to Vision Capital by migrating
                        codebase from AWS to Netlify and configured the 
                        appropriate Node.js version for future local development.
                        </li>
                        <li className="mb-2">
                        Reduced invalid investor access to private funds by 80% by developing Vue.js certification pages for accredited investors and qualified purchasers.
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
                        background: "rgb(255 255 255)", 
                        color: "text-white", 
                        width: " 40px",
                        height: "40px"
                    }}
                    icon={
                        <img 
                          src={waterloo} 
                          alt="icon" 
                          className="w-full h-full object-cover rounded-full"
                        />
                    }
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

            </VerticalTimeline >
        </div>
        </>
    );
};


