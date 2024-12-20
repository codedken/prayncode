"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "projects", path: "/projects" },
  { name: "articles", path: "/articles" },
  { name: "contact", path: "/contact" },
];
const Nav = () => {
  const pathName = usePathname();
  return (
    <nav className="flex gap-6">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${(link.path === pathName || (link.name === "articles" && pathName.includes("articles"))) && "border-b-2 border-accent text-accent"} font-medium capitalize transition-all hover:text-accent`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
