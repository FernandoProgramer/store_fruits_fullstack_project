"use client"
import { ReactNode, useState } from "react";
import { Menu, X, Home, User, ShoppingCart, InspectionPanel, Store, DoorOpen, BadgePlus, LayoutPanelTop, SquareMinus, ChevronsDown, ChevronUp } from "lucide-react";
import Link from 'next/link'
import { GiKiwiFruit } from "react-icons/gi";
import { usePathname, useRouter } from "next/navigation";
import { MenuSidebarProps } from "@/interfaces/layouts/menuSidebarProps";

/**
 *  Componente de Separación entre acciones
 */
export function SeparatorSidebar({ children }: { children: string }) {
    return (
        <div className="p-2 ps-0 mt-2 border-t border-[#9F9F9F] font-bold text-xs text-[#9F9F9F] flex items-center justify-between">
            <span >{children.toUpperCase()}</span>
            <SquareMinus size={10} />
        </div>
    )
}


/**
 *  Componente de Menu para cada acción
 */
export function MenuSidebar({ section, className, iconSize = 15 }: MenuSidebarProps) {
    const Icon = section.icon;

    const [isExpanded, setIsExpanded] = useState(false);
    function toggleSection() {
        setIsExpanded(!isExpanded);
    }
    return (
        <>
            {section.sub_section ? (
                <div className="flex flex-col p-2 gap-2 items-center rounded-md">
                    <button
                        onClick={toggleSection}
                        className={`flex items-center w-full ${className}`}
                    >
                        <Icon size={iconSize} />
                        <span className="ml-2">{section.label}</span>
                        {!isExpanded ? (
                            <ChevronsDown size={15} className="ml-auto" />
                        ) : (
                            <ChevronUp size={15} className="ml-auto" />
                        )}
                    </button>


                    {isExpanded && section.sub_section && (
                        <div className="flex flex-col w-full pl-4">
                            {section.sub_section.map((sub_sect, index) => (
                                <Link
                                    key={index}
                                    href={sub_sect.link}
                                    className="p-2 hover:bg-[#414141] rounded-md border-s rounded-s-none border-[#9F9F9F]"
                                >
                                    {sub_sect.label}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>

            ) : (
                <Link
                    href={section.link}
                    className={`flex gap-2 p-2 items-center rounded-md hover:bg-[#313131] ${className}`}
                >
                    <Icon size={iconSize} /> <span> {section.label}</span>
                </Link>
            )}
        </>
    )
}

/**
 *  Componnete
 */
export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter()
    const firstSection = [
        {
            label: 'Home',
            link: '/dashboard',
            icon: Home,

        },
        {
            label: 'Cart',
            link: 'dashboard/myCart',
            icon: ShoppingCart,
        },
        {
            label: 'Fruits',
            link: '/dashboard/fruits',
            icon: GiKiwiFruit,
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


    const secondSection = [
        {
            label: 'Section 2 - 1',
            link: '#',
            icon: LayoutPanelTop,
            sub_section: [
                {
                    label: 'Section 2 - 1 - 1',
                    link: '#',
                },
                {
                    label: 'Section 2 - 1 - 2',
                    link: '#',
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
        <aside>
            <div className="flex p-4 gap-10 flex-col">
                <Link
                    href="/dashboard"
                    className="flex gap-1 items-center text-[#F21019] font-semibold"
                >
                    <Store /> <span>Adru Fruits Dashboard</span>
                </Link>

                <nav className="flex flex-col font-light gap-1 text-[14px]">

                    <SeparatorSidebar>
                        First Actions
                    </SeparatorSidebar>

                    {/* Acciones del Sidebar */}
                    {firstSection.map((section) => (
                        <MenuSidebar key={section.label} section={section} />
                    ))}

                    <SeparatorSidebar>
                        Second Actions
                    </SeparatorSidebar>

                    {/* Acciones del Sidebar */}
                    {secondSection.map((section) => (
                        <MenuSidebar key={section.label} section={section} />
                    ))}
                </nav>
            </div>
        </aside>
    );
}
