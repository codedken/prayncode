"use client";

import { motion } from "framer-motion";

const SingleArticlePage = ({ params: { id } }: { params: { id: string } }) => {
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
          <h1 className="text-4xl text-white">Big Man {id}</h1>
        </motion.div>
      </div>
    </section>
  );
};

export default SingleArticlePage;
