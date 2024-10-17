"use client";

import CountUp from "react-countup";

const stats = [
  { num: 3, text: "Years of experience" },
  { num: 26, text: "Projects completed" },
  { num: 8, text: "Technologies mastered" },
  { num: 500, text: "Code commits" },
];

const Stats = () => {
  return (
    <section className="pb-12 pt-4 xl:pb-0 xl:pt-0">
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-[80vw] flex-wrap gap-6 xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div key={index} className="flex flex-1 items-center gap-4">
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-2xl font-extrabold md:text-4xl xl:text-6xl"
                />
                <p
                  className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
