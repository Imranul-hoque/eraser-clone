"use client";

import { Button } from "@/components/ui/button";
import { useAuth, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { routes } from "../../../constant";
import { Logo } from "./logo";
import { NavbarItem } from "./navbar-item";

export const Header = () => {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  return (
    <div className="shadow-xl w-full h-20 bg-gray-100 flex items-center justify-start px-6">
      <div className="flex items-center justify-between w-full">
        <Logo />
        <div className="flex items-center gap-x-3">
          {routes.map((route, index) => (
            <NavbarItem label={route.label} href={route.href} key={index} />
          ))}
          <div className="ml-2">
            {isSignedIn ? (
              <UserButton />
            ) : (
              <Button variant={"ghost"} onClick={() => router.push("/sign-in")}>
                Signin
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
