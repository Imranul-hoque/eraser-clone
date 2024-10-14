"use client";
import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
    return (
        <Link href={"/"} className="flex items-center gap-x-1">
            <Image
                width={40}
                height={40}
                alt="Logo"
                src={"/logo.svg"}
            />
            <p className="font-bold text-sm">Imran.</p>
        </Link>
    )
}