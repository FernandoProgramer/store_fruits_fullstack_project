"use client"; // Esto asegura que los hooks de React funcionen en Next.js

import { useState } from "react";
import { Menu, X, Home, User, ShoppingCart, Settings } from "lucide-react";
import Link from 'next/link'

export default function ResponsiveSidebar({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div
                className={`fixed z-20 top-0 left-0 h-full bg-blue-600 text-white transition-transform transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } sm:translate-x-0 w-64`}
            >
                <div className="flex items-center justify-between p-4 border-b border-blue-500">
                    <h1 className="text-xl font-semibold">My Sidebar</h1>
                    <button
                        onClick={toggleSidebar}
                        className="sm:hidden text-white hover:text-gray-300"
                    >
                        <X size={24} />
                    </button>
                </div>
                <nav className="flex flex-col p-4 space-y-4">
                    <Link
                        href="#"
                        className="flex items-center space-x-2 hover:bg-blue-500 p-2 rounded-lg"
                    >
                        <Home size={20} />
                        <span>Home</span>
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center space-x-2 hover:bg-blue-500 p-2 rounded-lg"
                    >
                        <User size={20} />
                        <span>Profile</span>
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center space-x-2 hover:bg-blue-500 p-2 rounded-lg"
                    >
                        <ShoppingCart size={20} />
                        <span>Cart</span>
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center space-x-2 hover:bg-blue-500 p-2 rounded-lg"
                    >
                        <Settings size={20} />
                        <span>Settings</span>
                    </Link>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col ml-0 sm:ml-64">
                <header className="flex items-center justify-between bg-gray-100 p-4 shadow sm:hidden">
                    <button
                        onClick={toggleSidebar}
                        className="text-blue-600 hover:text-blue-800"
                    >
                        <Menu size={24} />
                    </button>
                    <h1 className="text-lg font-semibold">Responsive Sidebar</h1>
                </header>
                <main className="p-4">
                    {children} {/* Aquí se renderiza el contenido dinámico */}
                </main>
            </div>
        </div>
    );
}
