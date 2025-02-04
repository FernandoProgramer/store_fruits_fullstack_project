"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { title_web_project } from "@/keys";
import { FaDoorOpen, FaHome, FaInfoCircle } from "react-icons/fa";
import { RiServiceFill } from "react-icons/ri";
import { IoMdContact } from "react-icons/io";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-red-600 text-white">
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Logo */}
                <div className="text-2xl font-bold text-yellow-400">
                    <Link href="/">{title_web_project}</Link>
                </div>

                {/* Menu for larger screens */}
                <div className="hidden md:flex space-x-6">
                    <Link
                        href="/"
                        className="flex items-center space-x-2 hover:text-yellow-400 transition-colors duration-300"
                    >
                        <FaHome /> <span>Home</span>
                    </Link>
                    <Link
                        href="/about"
                        className="flex items-center space-x-2 hover:text-yellow-400 transition-colors duration-300"
                    >
                        <FaInfoCircle /> <span>About</span>
                    </Link>
                    <Link
                        href="/services"
                        className="flex items-center space-x-2 hover:text-yellow-400 transition-colors duration-300"
                    >
                        <RiServiceFill /> <span>Services</span>
                    </Link>
                    <Link
                        href="/contact"
                        className="flex items-center space-x-2 hover:text-yellow-400 transition-colors duration-300"
                    >
                        <IoMdContact /> <span>Contact</span>
                    </Link>
                </div>

                {/* Buttons for larger screens */}
                <div className="hidden md:flex space-x-6">
                    <Link
                        href="/auth/login"
                        className="flex items-center space-x-2 text-yellow-500 border rounded-full px-5 py-2 border-yellow-500 hover:text-yellow-400 transition-colors duration-300 "
                    >
                        <span>Sign In</span>
                    </Link>

                    <Link
                        href="/auth/register"
                        className="flex items-center space-x-2 rounded-full bg-yellow-500 text-white px-5 py-2 hover:bg-yellow-400 transition-colors duration-300"
                    >
                        <FaDoorOpen /> <span>Sign Up</span>
                    </Link>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} aria-label="Toggle menu">
                        {isOpen ? <X className="w-6 h-6 text-yellow-400" /> : <Menu className="w-6 h-6 text-yellow-400" />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-red-700">
                    <div className="flex flex-col space-y-4 p-4">
                        <Link
                            href="/"
                            className="flex items-center space-x-2 text-white hover:text-yellow-400 transition-colors duration-300"
                        >
                            <FaHome /> <span>Home</span>
                        </Link>
                        <Link
                            href="/about"
                            className="flex items-center space-x-2 text-white hover:text-yellow-400 transition-colors duration-300"
                        >
                            <FaInfoCircle /> <span>About</span>
                        </Link>
                        <Link
                            href="/services"
                            className="flex items-center space-x-2 text-white hover:text-yellow-400 transition-colors duration-300"
                        >
                            <RiServiceFill /> <span>Services</span>
                        </Link>
                        <Link
                            href="/contact"
                            className="flex items-center space-x-2 text-white hover:text-yellow-400 transition-colors duration-300"
                        >
                            <IoMdContact /> <span>Contact</span>
                        </Link>

                        {/* Auth buttons in mobile menu */}
                        <Link
                            href="/auth/login"
                            className="flex items-center justify-center space-x-2 text-yellow-500 border rounded-full px-5 py-2 border-yellow-500 hover:text-yellow-400 transition-colors duration-300"
                        >
                            <span>Sign In</span>
                        </Link>

                        <Link
                            href="/auth/register"
                            className="flex items-center justify-center space-x-2 rounded-full bg-yellow-500 text-white px-5 py-2 hover:bg-yellow-400 transition-colors duration-300"
                        >
                            <FaDoorOpen /> <span>Sign Up</span>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
