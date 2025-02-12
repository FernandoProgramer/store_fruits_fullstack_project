"use client"

import { useState } from "react";
import { Menu, X, Home, User, ShoppingCart, InspectionPanel, Store, DoorOpen, BadgePlus } from "lucide-react";
import Link from 'next/link'
import { GiKiwiFruit } from "react-icons/gi";
import { usePathname, useRouter } from "next/navigation";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const inactiveLink = 'text-yellow-500 flex gap-1 p-2';
    const activeLink = `${inactiveLink} bg-gray-950 flex gap-1 rounded-l-lg transition duration-300 ease-in-out`
    const pathname = usePathname();
    const router = useRouter()
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
            sub_section: [
                {
                    label: 'New Fruit',
                    link: '/dashboard/fruits/new',
                },
                {
                    label: 'Inventory of Fruits',
                    link: '/dashboard/fruits/',
                },
            ]
        },

    ]

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    function hadleLogout() {
        return router.push("/")
    }

    return (
        <>
            <div className="text-yellow-400 p-4 pr-0 flex flex-col gap-2">
                <Link
                    href="/dashboard"
                    className="flex gap-1 mb-4 p-2 pr-5"
                >
                    <Store />
                    <span>Store Fruit</span>
                </Link>


                <Link
                    href="/dashboard/profile/5348"
                    className="flex flex-col gap-2 mb-4 p-2"
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

                        <div key={section.label}>
                            <Link
                                className={pathname === section.link ? activeLink : inactiveLink}
                                href={section.link}
                            >
                                {section.icon} <span>{section.label}</span>
                            </Link>

                            {section.sub_section?.map((sub_section) => (
                                <Link
                                    key={sub_section.label}
                                    className={pathname === sub_section.link ? activeLink : inactiveLink}
                                    href={sub_section.link}
                                >
                                    <span className="ml-4">- {sub_section.label}</span>
                                </Link>
                            ))}
                        </div>


                    ))}
                </nav>
                <button
                    onClick={hadleLogout}
                    className="flex gap-1 items-center bg-red-800 text-white p-2 rounded-sm w-fit">
                    <DoorOpen size={20} /> <span>Logout</span>
                </button>

                <Link
                    className="flex flex-col gap-2 items-center bg-cyan-500 text-cyan-950 p-3 mr-2 rounded-md"
                    href="/dashboard/fruits/new"
                >
                    <BadgePlus size={60} />
                    <span className="font-extrabold">
                        Add a New Fruit
                    </span>
                </Link>
            </div>
        </>
    );
}
