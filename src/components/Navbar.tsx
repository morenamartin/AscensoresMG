"use client"
import Image from "next/image"

import logo from "../assets/logo.png"
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
    const pathname = usePathname();

    const links = [
        { href: "/quienes-somos", label: "QUIÉNES SOMOS" },
        { href: "/contacto", label: "CONTACTO" },
        { href: "/preguntas", label: "PREGUNTAS FRECUENTES" },
    ];

    return(
        <div className="flex flex-row items-center justify-between z-30 w-[100%] bg-white px-28 h-14 fixed">
            <a href="/">
                <Image width={50} height={50} src={logo} alt="logo"/>
            </a>
            <div className="flex flex-row gap-8 text-sm">
               {links.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className={`px-2 py-2 ${
                        pathname === link.href
                        ? " text-[#597FAC]"
                        : "text-gray-700 hover:text-gray-900"
                    }`}
                    >
                    {link.label}
                </Link>
            ))}
            </div>
        </div>
    )
}

export default Navbar