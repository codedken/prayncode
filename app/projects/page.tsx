"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import {
  BsAndroid2,
  BsArrowUpRight,
  BsBehance,
  BsGithub,
} from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import { Swiper as SwiperTypes } from "swiper/types";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "yokobuy",
    description:
      "An e-commerce web app where you can conveniently shop for all you need in one spot.",
    stack: [
      { name: "Next.js" },
      { name: "Typescript" },
      { name: "Tailwind.css" },
      { name: "Cloudinary" },
    ],
    image: "/assets/work/yokobuy.png",
    live: "https://www.yokobuy.com",
    github: "https://www.yokobuy.com",
  },
  {
    num: "02",
    category: "UI/UX",
    title: "Spotify UI Clone",
    description:
      "A replica of the desktop version of spotify, a digital music service that grants you access to millions of songs.",
    stack: [{ name: "Figma" }],
    image: "/assets/work/spotify.png",
    live: "",
    github: "https://www.behance.net/gallery/141225549/Spotify-replicate",
  },
  {
    num: "03",
    category: "flutter",
    title: "giftor",
    description:
      "A mobile app used for random selection. E.g It can be used for sharing gifts among members of a certain group by random pairing.",
    stack: [{ name: "Flutter" }, { name: "Dart" }, { name: "Firebase" }],
    image: "/assets/work/giftor.png",
    live: "https://drive.google.com/file/d/1kuaOI7d49n0Mq5hQlE7b1QvfflmLXeXC/view?usp=sharing",
    github: "https://github.com/codedken/giftor",
  },
  {
    num: "04",
    category: "frontend",
    title: "koris energy",
    description:
      "A website for an organization that sells, installs, and manages solar systems",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind.css" },
      { name: "Sanity.io" },
    ],
    image: "/assets/work/koris.png",
    live: "https://www.korisenergy.com",
    github: "https://www.github.com/codedken/korisenergy",
  },
  {
    num: "05",
    category: "DevOps",
    title: "sock shop",
    description:
      "Deployment of a microservices-based app using modern approach that emphasizes automation and efficiency",
    stack: [
      { name: "Terraform" },
      { name: "Jenkins" },
      { name: "AWS EKS" },
      { name: "Prometheus" },
      { name: "Ansible Vault" },
    ],
    image: "/assets/work/sock.png",
    live: "https://github.com/codedken/altschool-capstone-project",
    github: "https://github.com/codedken/altschool-capstone-project",
  },
  {
    num: "06",
    category: "UI/UX",
    title: "Crypto Dashboard",
    description:
      "A typical landing page for monitoring and managing your crypto assets",
    stack: [{ name: "Figma" }],
    image: "/assets/work/crypto-dashboard.png",
    live: "",
    github: "https://www.behance.net/gallery/172265615/Crypto-dashboard",
  },
  {
    num: "07",
    category: "UI/UX",
    title: "Furnilamp",
    description: "A landing page for a furniture and home accessories company",
    stack: [{ name: "Figma" }],
    image: "/assets/work/furnilamp.png",
    live: "",
    github: "https://www.behance.net/gallery/131165043/Furnilamp",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperTypes) => {
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="flex min-h-[80vh] flex-col justify-center py-8 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="order-2 flex w-full flex-col xl:order-none xl:h-[460px] xl:w-[50%] xl:justify-between">
            <div className="flex h-[50%] flex-col gap-[20px] md:gap-[30px]">
              <div className="text-outline text-5xl font-extrabold leading-none text-transparent xl:text-8xl">
                {project.num}
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-[32px] font-bold capitalize leading-none text-white transition-all duration-500 group-hover:text-accent xl:text-[42px]">
                  {project.title}
                </h2>
                <span className="capitalize">{project.category} project</span>
              </div>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex flex-wrap gap-1">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-accent md:text-xl">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20" />
              <div className="flex items-center gap-4">
                {project.live !== "" && (
                  <Link href={project.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="group flex size-[50px] items-center justify-center rounded-full bg-white/10 xl:size-[70px]">
                          {project.category === "flutter" ? (
                            <BsAndroid2 className="text-xl text-white group-hover:text-accent xl:text-3xl" />
                          ) : (
                            <BsArrowUpRight className="text-xl text-white group-hover:text-accent xl:text-3xl" />
                          )}
                        </TooltipTrigger>
                        <TooltipContent>
                          {project.category === "flutter" ? (
                            <p>Download Apk</p>
                          ) : (
                            <p>Live project</p>
                          )}
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="group flex size-[50px] items-center justify-center rounded-full bg-white/10 xl:size-[70px]">
                        {project.live === "" ? (
                          <BsBehance className="text-xl text-white group-hover:text-accent xl:text-3xl" />
                        ) : (
                          <BsGithub className="text-xl text-white group-hover:text-accent xl:text-3xl" />
                        )}
                      </TooltipTrigger>
                      <TooltipContent>
                        {project.live === "" ? (
                          <p>Behance Gallery</p>
                        ) : (
                          <p>Github repository</p>
                        )}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="mb-12 xl:h-[520px]"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="group relative flex h-[360px] items-center justify-center bg-pink-50/20 md:h-[460px]">
                      <div className="absolute bottom-0 top-0 z-10 h-full w-full bg-black/10" />

                      <div className="relative h-full w-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] size-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
