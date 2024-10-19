"use client";

import { ReactTyped } from "react-typed";

const functions = [
  "Frontend Developer",
  "UI/UX Designer",
  "Backend Developer",
  "Flutter Developer",
  "DevOps Engineer",
  "Technical Writer",
];

const AnimatedText = () => {
  return (
    <span className="text-xl">
      <ReactTyped strings={functions} typeSpeed={100} backSpeed={100} loop />
    </span>
  );
};

export default AnimatedText;
