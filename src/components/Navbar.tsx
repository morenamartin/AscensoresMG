"use client"
import Image from "next/image"
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { MenuIcon } from "lucide-react";

const Navbar = () => {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { href: "/quienes-somos", label: "QUIÉNES SOMOS" },
        { href: "/preguntas", label: "PREGUNTAS FRECUENTES" },
        { href: "/contacto", label: "CONTACTO" },
    ];

    return (
        <nav className="fixed z-30 flex items-center justify-between w-full px-6 bg-white md:px-28 h-14">
            <Link href="/">
                <Image width={50} height={50} src="/logo.png" alt="logo" />
            </Link>
            {/* Desktop links */}
            <div className="flex-row hidden gap-8 text-sm md:flex">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`px-2 py-2 ${
                            pathname === link.href
                                ? "text-[#597FAC]"
                                : "text-gray-700 hover:text-gray-900"
                        }`}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
            {/* Mobile menu button */}
            <button
                className="flex items-center md:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Abrir menú"
            >
                {menuOpen ? (
                    <MenuIcon className="text-gray-700 transition-transform duration-500 rotate-45 w-7 h-7" />
                ) : (
                    <MenuIcon className="text-gray-700 transition-transform duration-500 w-7 h-7" />
                )}
            </button>
            {/* Mobile dropdown menu */}
            {menuOpen && (
                <div className="absolute left-0 flex flex-col items-center w-full bg-white shadow-md top-14 md:hidden animate-fade-in">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`w-full text-center px-4 py-3 border-b ${
                                pathname === link.href
                                    ? "text-[#597FAC]"
                                    : "text-gray-700 hover:text-gray-900"
                            }`}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;