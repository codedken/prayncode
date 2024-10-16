"use client";

import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I craft high performant web applications with shiny UIs using the most modern web technologies",
    href: "",
  },
  {
    num: "02",
    title: "DevOps Services",
    description:
      "I can help you provision, optimize, and manage your infrastructure using modern DevOps practices",
    href: "",
  },
  {
    num: "03",
    title: "Flutter Application",
    description:
      "I build efficient cross-platform mobile applications with fascinating UIs using flutter and dart",
    href: "",
  },
  {
    num: "04",
    title: "Backend Development",
    description:
      "I write highly efficient APIs that are easy to consume. I usually achieve this using either nodejs or python. ",
    href: "",
  },
  {
    num: "05",
    title: "Technical Wrting",
    description:
      "I make your products and services quite intuitive for users through a legibly written documentation.",
    href: "",
  },
];

import { motion } from "framer-motion";
import Link from "next/link";

const Services = () => {
  return (
    <section className="flex min-h-[80vh] flex-col justify-center py-12 xl:py-0">
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
                <div className="flex w-full items-center justify-between">
                  <div className="text-outline group-hover:text-outline-hover text-5xl font-extrabold text-transparent transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="flex size-[60px] items-center justify-center rounded-full bg-white transition-all duration-500 hover:-rotate-45 group-hover:bg-accent"
                  >
                    <BsArrowDownRight className="text-3xl text-primary" />
                  </Link>
                </div>
                <h2 className="text-[28px] font-bold leading-none text-white transition-all duration-500 group-hover:text-accent md:text-[42px]">
                  {service.title}
                </h2>
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
