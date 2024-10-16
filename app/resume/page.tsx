"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaPython,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiTerraform,
  SiKubernetes,
  SiAnsible,
  SiFlutter,
} from "react-icons/si";

// About data
const about = {
  title: "About me",
  description:
    "I am a computer aficionado and always fascinated at how it works eventhough I now understand its dynamics",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Kennedy Chibuzor",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+234) 806 889 5803",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years",
    },
    {
      fieldName: "Twitter",
      fieldValue: "@kenbuzor",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Nigeria",
    },
    {
      fieldName: "Email",
      fieldValue: "cbsmoothoj@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Igbo",
    },
  ],
};

// Experience Data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Work experience",
  description:
    "I have both software developer related and non-related work experience, you can check them out from the below scrollable list",
  items: [
    {
      company: "Freelancing",
      position: "Full Stack Developer/DevOps Engineer",
      duration: "Jan 2021 - Present",
    },
    {
      company: "Access Bank Plc",
      position: "Customer Service Officer",
      duration: "Jan 2016 - Sept 2018",
    },
    {
      company: "Guaranty Trust Bank Plc",
      position: "Marketing Personnel",
      duration: "June 2015 - Dec 2015",
    },
  ],
};

// Education Data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: "See below some of my educational achievements.",
  items: [
    {
      institution: "Altschool Africa",
      degree: "Cloud Engineering Track",
      duration: "Mar 2023 - Mar 2024",
    },
    {
      institution: "Udemy Online Platform",
      degree: "The Complete 2021 Flutter Development Bootcamp with Dart",
      duration: "June 2021 - Aug 2021",
    },
    {
      institution: "Academind & Udemy",
      degree: "Flutter & Dart - The Complete Guide [2020 Edition]",
      duration: "June 2020 - Sept 2020",
    },
    {
      institution: "Andela Learning Community",
      degree: "Google Africa Scholarship Android Basic Course",
      duration: "August 2018",
    },
  ],
};

// Skills Data
const skills = {
  title: "My skills",
  description:
    "I am proficient at implementing different technologies. Check below to see some of the tech stacks",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiFlutter />,
      name: "flutter",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaDocker />,
      name: "docker",
    },
    {
      icon: <SiAnsible />,
      name: "ansible",
    },
    {
      icon: <SiTerraform />,
      name: "terraform",
    },
    {
      icon: <SiKubernetes />,
      name: "kubernetes",
    },
    {
      icon: <FaPython />,
      name: "python",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="flex min-h-[80vh] justify-center py-12 xl:pt-8"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col gap-[60px] xl:flex-row"
        >
          <TabsList className="mx-auto flex w-full max-w-[380px] flex-col gap-6 xl:mx-0">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex h-[184px] flex-col items-center justify-center gap-1 rounded-xl bg-[#232329] px-10 py-6 lg:items-start"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="min-h-[60px] max-w-[260px] text-center text-xl lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="h-[6px] w-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex h-[220px] flex-col items-center justify-center gap-2 rounded-xl bg-[#232329] px-10 py-6 lg:items-start"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="min-h-[60px] max-w-[260px] text-center text-xl lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="h-[6px] w-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="h-full w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                    {skills.description}
                  </p>
                  <ul className="grid grid-cols-3 gap-4 md:grid-cols-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="group flex h-[100px] w-full items-center justify-center rounded-lg bg-[#232329] md:h-[150px]">
                                <div className="text-4xl transition-all duration-300 group-hover:text-accent md:text-6xl">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </TabsContent>

            {/* About */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                  {about.description}
                </p>
                <ul className="mx-4 grid max-w-[620px] grid-cols-1 gap-y-6 xl:mx-0 xl:grid-cols-2">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center gap-4">
                        <span className="text-white/60">{item.fieldName}:</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
