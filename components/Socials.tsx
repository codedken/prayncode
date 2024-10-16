import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
const socials = [
  { icon: <FaGithub />, path: "https://www.github.com/codedken" },
  { icon: <FaTwitter />, path: "https://www.x.com/kenbuzor" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/chibuzor-ojukwu-6606a7b5",
  },
  { icon: <FaYoutube />, path: "https://www.youtube.com/@prayandcode" },
];

const Socials = ({
  containerStyles,
  iconStyles,
}: {
  containerStyles: string;
  iconStyles: string;
}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            target="_blank"
            className={iconStyles}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
