"use client";

const articles = [
  {
    id: "01",
    title: "How to Cache Data in your NextJs Application",
    description:
      "The aim of this article is to simplify for you the concept of data caching in a nextjs application. This article came as a result of my…",
    like: false,
  },
  {
    id: "02",
    title: "The Concept of Expansion in the Linux Command Line",
    description:
      "In this short article, we will be exploring an important concept in linux shell called expansion.",
    like: false,
  },
  {
    id: "03",
    title: "Concept of Virtualization",
    description:
      "What is Virtualization? Virtualization is a technology you can use to create a virtual representation of servers, networks, storage and other physical machines.",
    like: false,
  },
  {
    id: "04",
    title: "React useEffect hook",
    description:
      "React is a Javascript library for building user interfaces. It is the most popular Javascript library. This is not an article for learning…",
    like: false,
  },
];

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Articles = () => {
  const [articleData, setArticleData] = useState(articles);
  const toggleLike = (id: string) => {
    setArticleData((prev) =>
      prev.map((article) =>
        article.id === id ? { ...article, like: !article.like } : article,
      ),
    );
  };
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
          {articleData.map(({ id, title, description, like }, index) => {
            return (
              <div
                key={index}
                className="flex flex-1 flex-col justify-center gap-6"
              >
                <h2 className="text-[28px] font-bold leading-9 text-white transition-all duration-500 xl:text-[36px]">
                  {title}
                </h2>
                <p className="line-clamp-2 text-white/60">{description}</p>
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button onClick={() => toggleLike(id)}>
                      {like ? (
                        <FaHeart className="fill-accent text-2xl md:text-3xl" />
                      ) : (
                        <FaRegHeart className="text-2xl md:text-3xl" />
                      )}
                    </button>
                    <span className="text-white/60 md:text-lg">46 likes</span>
                  </div>

                  <Link
                    href={`articles/${id}`}
                    className="flex items-center justify-center gap-2 rounded-lg bg-white px-3 py-1 transition-all duration-500 hover:bg-accent"
                  >
                    <span className="text-primary">Read more</span>
                    <BsArrowRight className="text-xl text-primary" />
                  </Link>
                </div>
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
