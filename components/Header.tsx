import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Header = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <header className="py-8 text-white xl:py-12">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <h1 className="text-3xl font-semibold md:text-4xl">
            Pray<span className="text-accent">&</span>Code
            <span className="text-accent">.</span>
          </h1>
        </Link>

        <div className="hidden items-center gap-6 xl:flex">
          <Nav />

          {user && (
            <>
              <div className="h-10 w-0.5 bg-white" />
              <LogoutLink>
                <Button className="h-fit rounded-full bg-red-500 px-3.5 py-2 text-white/90 hover:bg-red-600">
                  Logout
                </Button>
              </LogoutLink>
            </>
          )}
        </div>

        <div className="xl:hidden">
          <MobileNav user={user} />
        </div>
      </div>
    </header>
  );
};

export default Header;
