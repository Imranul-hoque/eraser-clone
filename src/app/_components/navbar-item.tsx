"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

type NavbarItemProps = {
    label: string;
    href: string;
}

export const NavbarItem = ({ label, href }: NavbarItemProps) => {
    
    const pathname = usePathname();
    const isActive = pathname === href;
    
    return (
        <Link href={href}
         className={cn("text-sm font-semibold text-muted-foreground hover:text-black", isActive && "text-black")}
        >
            {label}
        </Link>
    )
}