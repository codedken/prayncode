"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import { ScrollArea } from "./ui/scroll-area";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "./ui/button";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "projects", path: "/projects" },
  { name: "articles", path: "/articles" },
  { name: "contact", path: "/contact" },
];
const MobileNav = ({ user }: { user: KindeUser<Record<string, unknown>> }) => {
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
        <div className="h-0.5 w-full bg-white" />
        {user ? (
          <LogoutLink className="mt-6">
            <Button className="h-fit rounded-full bg-red-500 px-3.5 py-2 text-white/90 hover:bg-red-600">
              Logout
            </Button>
          </LogoutLink>
        ) : (
          <div className="mt-6 flex gap-2">
            <LoginLink>
              <Button className="h-fit rounded-full bg-blue-400 px-3.5 py-2 hover:bg-blue-500">
                Login
              </Button>
            </LoginLink>
            <RegisterLink>
              <Button className="h-fit rounded-full bg-green-400 px-3.5 py-2 hover:bg-green-500">
                Register
              </Button>
            </RegisterLink>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
