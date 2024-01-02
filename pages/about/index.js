import React, {useState} from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaJava,
  FaPython,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiSpringboot,
  SiSpringsecurity,
  SiFlask,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiJunit5,
  SiJest,
  SiPytest,
} from "react-icons/si";


//  data
export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
        ],
      },
      {
        title: 'Backend Development',
        icons: [
          <FaJava />,
          <FaPython />,
          <SiSpringboot />,
          <SiSpringsecurity/>,
          <SiFlask/>,
          <SiNodedotjs/>,
        ],
      },
      {
        title: 'DataBase Management',
        icons: [
          <SiMongodb/>,
          <SiMysql/>,
        ],
      },
      {
        title: 'Testing Frameworks',
        icons: [
          <SiJunit5/>,
          <SiJest/>,
          <SiPytest/>,
        ],
      }
    ],
  },
  {
    title: 'awards',
    info: [
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Software Engineer Trainee - Semicolon Africa',
        stage: '2023 - Present',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Agricultural Extension and Management - Federal College of Agriculture, Akure, Ondo State',
        stage: '2022',
      },
      {
        title: 'Animal Health and Production - Federal College of Agriculture, Akure, Ondo State',
        stage: '2019',
      },
    ],
  },
];


// about data
import Avatar  from '../../components/Avatar';
import Circles from '../../components/Circles';


//framer motion
import {motion} from 'framer-motion';
import { fadeIn } from "../../variants";

//counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index)
  return( 
  <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
    <Circles/>
    {/* avatar img*/}
    <motion.div
      variants={fadeIn('right', 0.2)}
      initial= 'hidden'
      animate='show'
      exit='hidden'
      className="hidden xl:flex absolute bottom-0 -left-[370px]"
    >
      <Avatar/>
    </motion.div>
    <div className="container mx-auto h-full flex flex-col items-center xl:flex-row
    gap-x-6">
     {/* text */}
      <div className="flex-1 flex flex-col justify-center">
        <motion.h2 
          variants={fadeIn('right', 0.2)}
          initial= 'hidden'
          animate='show'
          exit='hidden'
          className="h2">
          Solving <span className="text-accent">problems</span> through Software
        </motion.h2>
        <motion.p 
          variants={fadeIn('right', 0.2)}
          initial= 'hidden'
          animate='show'
          exit='hidden'
          className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
          I'm a Software Engineer Looking for opportunities to showcase my skill. 
          I have almost a year experience and I have projects to back my claim up.
          Feel free to check my projects and contact me if you find me suitable for your job. Thank you.
        </motion.p>
        {/* counters */}
        <motion.div 
          variants={fadeIn('right', 0.6)}
          initial= 'hidden'
          animate='show'
          exit='hidden'
          className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:max-0 
        mb-8">
          <div className="flex flex-1 xl:gap-x-6">
            {/* experience */}
            <div className="relative flex-1 after:w-[1px] after:h-full
            after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text4xl font-extrabold text-accent mb-2">
                <CountUp  start={0} end={1} duration={5}/> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Years of experience</div>
            </div>
            
            {/* projects */}
            <div className="relative flex-1 after:w-[1px] after:h-full
            after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={2} duration={5} /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Finished Projects</div>            {/* clients */}
            </div>
            
          </div>
        </motion.div>
      </div>
      {/* info */}
      <motion.div 
        variants={fadeIn('left', 0.2)}
        initial= 'hidden'
        animate='show'
        exit='hidden'
        className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
          {aboutData.map((item, itemIndex) => {
            return (
              <div 
                key={itemIndex} 
                className={`${index === itemIndex && 
                'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                } cursor-pointer capitalize xl:text-lg relative after:w-8
              after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
              onClick={() => setIndex(itemIndex)}
            >
                {item.title}
              </div>
            )
          })}
        </div>
        <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center">
          {aboutData[index].info.map((item, itemIndex) => {
            return ( 
              <div key={itemIndex} className="flex-1 flex flex-col md:flex-row
              max-w-max gap-x-2 items-center text-white/60"
              >
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                  {/* icons */}
                  {item.icons?.map((icon, itemIndex) => {
                    return <div key={itemIndex} className="text-2xl text-white">{icon}</div>
                  })}
                </div>
                

              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  </div>);
};

export default About;
