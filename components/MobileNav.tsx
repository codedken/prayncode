"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

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
        <div className="mb-40 mt-32 text-center text-2xl">
          <h1 className="text-4xl font-semibold">
            Pray&Code<span className="text-accent">.</span>
          </h1>
        </div>

        <nav className="flex flex-col items-center justify-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                onClick={toggleSideMenu}
                className={`${link.path === pathName && "border-b-2 border-accent text-accent"} text-xl capitalize transition-all hover:text-accent`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
