"use client"

import { useState } from "react";
import { Menu, X, Home, User, ShoppingCart, InspectionPanel, Store, DoorOpen } from "lucide-react";
import Link from 'next/link'
import { GiKiwiFruit } from "react-icons/gi";
import { usePathname } from "next/navigation";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const inactiveLink = 'text-yellow-500 flex gap-1 p-2';
    const activeLink = `${inactiveLink} bg-red-100 text-red-500 flex gap-1 rounded-l-lg transition duration-300 ease-in-out`
    const pathname = usePathname();

    const sectionsNav = [
        {
            label: 'Home',
            link: '/dashboard',
            icon: <Home size={20} />,
        },
        {
            label: 'Cart',
            link: 'dashboard/myCart',
            icon: <ShoppingCart size={20} />,
        },
        {
            label: 'Fruits',
            link: '/dashboard/fruits',
            icon: <GiKiwiFruit size={20} />,
        },
        {
            label: 'section',
            link: '/dashboard/section',
            icon: <InspectionPanel size={20} />,
            sub_section: {
                label: 'sub Section',
                link: '/dashboard/section/section2',
            }
        },

    ]

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="text-yellow-400 p-4 pr-0 flex flex-col gap-2">
                <Link
                    href="/dashboard"
                    className="flex gap-1 mb-4 p-2"
                >
                    <Store />
                    <span>Store Fruit</span>
                </Link>


                <Link
                    href="/dashboard/profile/5348"
                    className="flex flex-col gap-2 mb-4 p-2 "
                >
                    <img
                        className="w-20 h-20 rounded-full object-cover"
                        src="https://plus.unsplash.com/premium_photo-1673866484792-c5a36a6c025e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="img of profile"
                    />
                    <span className="text-sm font-light">
                        User Name
                    </span>
                </Link>

                <nav
                    className="flex flex-col gap-2"
                >
                    {sectionsNav.map((section) => (
                        <Link
                            key={section.label}
                            className={pathname === section.link ? activeLink : inactiveLink}
                            href={section.link}
                        >
                            {section.icon} <span>{section.label}</span>
                        </Link>
                    ))}
                </nav>
                <button className="flex gap-1 items-center bg-red-800 text-white p-2 rounded-sm">
                    <DoorOpen size={20} /> <span>Logout</span>
                </button>
            </div>
        </>
    );
}
