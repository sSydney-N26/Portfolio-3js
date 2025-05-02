import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from "framer-motion"
import trend from "../assets/tech/trend.png"
import waterloo from "../assets/tech/waterloo.png"
import vision from "../assets/tech/vision.png"
import shopify from "../assets/tech/shopify_logo.png"

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
                duration: 0.75,
                delay: 0.5,
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
            delay: 0.75,
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
                          src={shopify}
                          alt="icon" 
                          className="w-full h-full object-cover rounded-full"
                        />
                    }
                >
                <div className="flex flex-row justify-between">               
                    <h3 className="font-bold mb-1 text-lg"> 
                        Software Engineer (IT Engineering & Shop Minis Team)
                    </h3>
                    <h4 className="text-right font-normal italic"> January 2025 - May 2025 </h4>
                </div>
                <h3 className="mb-2 italic"> 
                    Shopify
                </h3>
                <div className="text-gray-800 md:text-[12px]">
                    <ul className="list-disc pl-5"> 
                        <li className="mb-2">
                        Shipped <b><a 
                                href="https://shop.app/mini/daily-fits"
                                className={
                                    `inline-block 
                                    underline
                                    hover:underline 
                                    transition-colors 
                                    bg-transparent 
                                    hover:bg-yellow-100`
                                }
                            >
                        Daily Fits 
                        </a></b> to <b>millions of users</b> — an application on the Shop App built with <b> React Native, Shop Minis SDK, and
                        Ruby on Rails </b> — featuring image upload, AI-powered background removal, date-based outfit cataloging, and sharing.
                        </li>
                        <li className="mb-2">
                        Built a <b> Python ETL </b> pipeline on <b> GCP (Pub/Sub → BigQuery) </b> to ingest and normalize daily telemetry from <b> 10,000+
                        devices </b>, powering <b> Looker Studio </b> dashboards that quantify security control effectiveness and surface misconfigurations.
                        </li>
                        <li>
                        Eliminated <b> 95% </b> of misconfigs by automating daily BigQuery analysis and Slack alerts via <b> Ruby, SQL, and GitHub Actions </b>.
                        </li>
                        <li>
                        Reduced integration code by <b> 30% </b> via migrating an internal <b >Rails </b> tool from a <b> REST-based </b> client to an in-house <b> GraphQL </b> client.
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
                        Software Developer (Vision One Endpoint Security Team)
                    </h3>
                    <h4 className="text-right font-normal italic"> January 2024 - May 2024 </h4>
                </div>
                <h3 className="mb-2 italic"> 
                    Trend Micro
                </h3>
                <div className="text-gray-800 md:text-[12px]">
                    <ul className="list-disc pl-5"> 
                        <li className="mb-2">
                        Developed a caching mechanism for the <b>
                            <a 
                                href="https://help.deepsecurity.trendmicro.com/20_0/on-premise/application-control.html" 
                                className={
                                    `inline-block 
                                    underline
                                    hover:underline 
                                    transition-colors 
                                    bg-transparent 
                                    hover:bg-yellow-100`
                                }
                            >
                            Application Control</a></b> product to enforce security rules on specified users using <b> C++ </b>.
                        </li>
                        <li className="mb-2">
                        Facilitated cross-team collaboration to detect & generate new security events on <b><a
                                href="https://www.trendmicro.com/en_gb/business/customers/cloud-workload-security.html"                              
                                className={
                                    `inline-block 
                                    underline
                                    hover:underline 
                                    transition-colors 
                                    bg-transparent 
                                    hover:bg-yellow-100`
                                }> Workload Security’s </a></b> GUI using <b> Java </b>.
                        </li>
                        <li>
                        Automated <b> Jenkins </b> regression tests across <b> 16 OS </b> and integrated results as a required GitHub check to improve build stability.
                        </li>
                        <li>
                        Enabled developers to automate build performance results by maintaining <b> Python </b> test scripts and deploying <b> AWS </b> resources.
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
                    <h4 className="text-right font-normal italic"> July 2023 - July 2024 </h4>
                </div>
                <h3 className="mb-2 italic"> Vision Capital Corporation </h3>
                <div className="text-gray-800 md:text-[12px]">
                    <ul className="list-disc pl-5"> 
                        <li className="mb-2">
                        Reduced invalid private fund access by <b> 80% </b> by building <b> Vue.js </b> pages to verify and enforce investor eligibility requirements.
                        </li>
                        <li className="mb-2">
                        Integrated <b> Prismic API </b> to build <b> 10+ </b> reusable content blocks, enabling the marketing team to make code-free website updates.
                        </li>
                        <li className="mb-2">
                        Enhanced policy transparency by implementing cookie policies for <b>Vision Capital</b>, an investment fund managing <b>$600+</b> million.
                        </li>
                        <li>
                        Migrated production workloads from <b>AWS</b> to <b>Netlify</b>, reducing deployment complexity and pitching cost reduction to executives
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
                        and pitching a financial investment coach using <b> Microsoft Azure Machine
                        Learning </b> and <b> Microsoft Azure Bot Services </b>.
                        </li>
                        <li className="mb-2">
                        Optimized the data preprocessing process by leveraging <b> Azure Machine Learning </b> modules,
                        including <b> Normalized Data & Clean Missing Data </b>.
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


