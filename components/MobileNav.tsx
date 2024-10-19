"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import { ScrollArea } from "./ui/scroll-area";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "projects", path: "/projects" },
  { name: "articles", path: "/articles" },
  { name: "contact", path: "/contact" },
];
const MobileNav = () => {
  const pathName = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleSideMenu = () => {
    setMenuOpen((prev: boolean) => !prev);
  };

  return (
    <Sheet open={menuOpen} onOpenChange={toggleSideMenu}>
      <SheetTrigger className="flex items-center justify-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mb-12 mt-24 text-2xl">
          <h1 className="text-3xl font-semibold">
            Pray<span className="text-accent">&</span>Code
            <span className="text-accent">.</span>
          </h1>
        </div>
        <ScrollArea className="h-[350px]">
          <nav className="flex flex-col gap-8">
            {links.map((link, index) => {
              return (
                <Link
                  href={link.path}
                  key={index}
                  onClick={toggleSideMenu}
                  className={`${(link.path === pathName || (link.name === "articles" && pathName.includes("articles"))) && "border-b-2 border-accent text-accent"} w-fit text-xl capitalize transition-all hover:text-accent`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
