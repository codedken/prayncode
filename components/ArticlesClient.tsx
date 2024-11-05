"use client";

import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import Link from "next/link";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import { useRouter } from "next/navigation";

import { motion } from "framer-motion";
const ArticlesClient = ({
  articles,
  user,
}: {
  articles: {
    id: string;
    title: string;
    description: string;
    like: boolean;
    no_of_likes: number;
  }[];
  user: KindeUser<Record<string, unknown>>;
}) => {
  const router = useRouter();
  const [articleData, setArticleData] = useState(articles);
  const toggleLike = (id: string) => {
    if (!user) {
      router.push("/api/auth/login?post_login_redirect_url=/articles");
      return;
    }
    setArticleData((prev) =>
      prev.map((article) => {
        if (article.id === id) {
          const isLike = !article.like;
          return {
            ...article,
            like: isLike,
            no_of_likes: isLike
              ? article.no_of_likes + 1
              : article.no_of_likes - 1,
          };
        } else {
          return article;
        }
      }),
    );
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="grid grid-cols-1 gap-[60px] md:grid-cols-2"
    >
      {articleData.map(
        ({ id, title, description, like, no_of_likes }, index) => {
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
                  <span className="text-white/60 md:text-lg">
                    {no_of_likes} likes
                  </span>
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
        },
      )}
    </motion.div>
  );
};

export default ArticlesClient;
