"use client";

import { BiLogoFlutter } from "react-icons/bi";
import { FaFigma, FaInfinity, FaLaptop } from "react-icons/fa";
import { FaPenToSquare, FaScrewdriverWrench } from "react-icons/fa6";

const services = [
  {
    icon: (
      <FaLaptop className="size-8 transition-all duration-500 group-hover:text-accent md:size-10" />
    ),
    title: "Web Development",
    description:
      "I craft high performant web applications with shiny UIs using the most modern web technologies",
  },
  {
    icon: (
      <FaInfinity className="size-8 transition-all duration-500 group-hover:text-accent md:size-10" />
    ),
    title: "DevOps Services",
    description:
      "I can help you provision, optimize, and manage your infrastructure using modern DevOps practices",
  },
  {
    icon: (
      <BiLogoFlutter className="size-8 transition-all duration-500 group-hover:text-accent md:size-10" />
    ),
    title: "Flutter App",
    description:
      "I build efficient cross-platform mobile applications with fascinating UIs using flutter and dart",
  },
  {
    icon: (
      <FaScrewdriverWrench className="size-6 transition-all duration-500 group-hover:text-accent md:size-8" />
    ),
    title: "Backend Development",
    description:
      "I write highly efficient APIs that are easy to consume. I usually achieve this using either nodejs or python. ",
  },
  {
    icon: (
      <FaPenToSquare className="size-8 transition-all duration-500 group-hover:text-accent md:size-10" />
    ),
    title: "Technical Writing",
    description:
      "I make your products and services quite intuitive for users through a legibly written documentation.",
  },
  {
    icon: (
      <FaFigma className="size-8 transition-all duration-500 group-hover:text-accent md:size-10" />
    ),
    title: "UI/UX Design",
    description:
      "I bring to reality sleek and beautiful designs that are locked up in the realm of imagination and hallucination",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="flex min-h-[80vh] flex-col justify-center py-8 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 gap-[60px] md:grid-cols-2"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="group flex flex-1 flex-col justify-center gap-6"
              >
                <div className="flex items-center gap-4">
                  {service.icon}
                  <h2 className="text-[28px] font-bold leading-none text-white transition-all duration-500 group-hover:text-accent md:text-[36px]">
                    {service.title}
                  </h2>
                </div>
                <p className="text-white/60">{service.description}</p>
                <div className="w-full border-b border-white/20"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
