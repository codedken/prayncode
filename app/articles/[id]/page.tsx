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
import { notFound } from "next/navigation";

const SingleArticlePage = ({ params: { id } }: { params: { id: string } }) => {
  const singleArticle = articles.find((article) => article.id === id);
  if (!singleArticle) {
    return notFound();
  }
  return (
    <section className="flex min-h-[80vh] flex-col py-8 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="flex flex-col gap-6"
        >
          <h1 className="text-4xl font-bold text-white transition-all duration-500">
            {singleArticle.title}
          </h1>
          <p>{singleArticle.description}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default SingleArticlePage;
