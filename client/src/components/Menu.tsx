"use client"

import { usePathname } from "next/navigation";
import Navbar from "./ui/Nadvar";

export default function Menu() {
    const pathname = usePathname();
    return (
        <>
            {!pathname.startsWith('/dashboard') && <Navbar />}
        </>
    )
}
