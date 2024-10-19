"use client";

const articles = [
  {
    num: "01",
    title: "How to Cache Data in your NextJs Application",
    description:
      "The aim of this article is to simplify for you the concept of data caching in a nextjs application. This article came as a result of my…",
    href: "/articles/1",
  },
  {
    num: "02",
    title: "The Concept of Expansion in the Linux Command Line",
    description:
      "In this short article, we will be exploring an important concept in linux shell called expansion.",
    href: "/articles/2",
  },
  {
    num: "03",
    title: "Concept of Virtualization",
    description:
      "What is Virtualization? Virtualization is a technology you can use to create a virtual representation of servers, networks, storage and other physical machines.",
    href: "/articles/3",
  },
  {
    num: "04",
    title: "React useEffect hook",
    description:
      "React is a Javascript library for building user interfaces. It is the most popular Javascript library. This is not an article for learning…",
    href: "/articles/4",
  },
];

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const Articles = () => {
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
          {articles.map((service, index) => {
            return (
              <div
                key={index}
                className="flex flex-1 flex-col justify-center gap-6"
              >
                <div className="flex w-full items-center justify-between">
                  <div className="text-outline text-5xl font-extrabold text-transparent transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="flex items-center justify-center gap-2 rounded-lg bg-white px-3 py-1 transition-all duration-500 hover:bg-accent"
                  >
                    <span className="text-primary">Read more</span>
                    <BsArrowRight className="text-xl text-primary" />
                  </Link>
                </div>
                <h2 className="text-[28px] font-bold leading-9 text-white transition-all duration-500 xl:text-[36px]">
                  {service.title}
                </h2>
                <p className="line-clamp-2 text-white/60">
                  {service.description}
                </p>
                <div className="w-full border-b border-white/20"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Articles;
