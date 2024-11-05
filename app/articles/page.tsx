const articles = [
  {
    id: "01",
    title: "How to Cache Data in your NextJs Application",
    description:
      "The aim of this article is to simplify for you the concept of data caching in a nextjs application. This article came as a result of my…",
    like: false,
    no_of_likes: 0,
  },
  {
    id: "02",
    title: "The Concept of Expansion in the Linux Command Line",
    description:
      "In this short article, we will be exploring an important concept in linux shell called expansion.",
    like: false,
    no_of_likes: 0,
  },
  {
    id: "03",
    title: "Concept of Virtualization",
    description:
      "What is Virtualization? Virtualization is a technology you can use to create a virtual representation of servers, networks, storage and other physical machines.",
    like: false,
    no_of_likes: 0,
  },
  {
    id: "04",
    title: "React useEffect hook",
    description:
      "React is a Javascript library for building user interfaces. It is the most popular Javascript library. This is not an article for learning…",
    like: false,
    no_of_likes: 0,
  },
];

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import ArticlesClient from "@/components/ArticlesClient";

const Articles = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <section className="flex min-h-[80vh] flex-col justify-center py-8 xl:py-0">
      <div className="container mx-auto">
        <ArticlesClient articles={articles} user={user} />
      </div>
    </section>
  );
};

export default Articles;
