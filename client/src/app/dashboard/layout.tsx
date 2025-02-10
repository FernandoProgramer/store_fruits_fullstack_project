import Sidebar from "@/components/layouts/Sidebar";
import { Roboto } from "next/font/google";
import { ReactNode } from "react";

export const metadata = {
    title: 'Dashboard | Store Fruits 🍊',
    description: 'Accede a tu panel de control para gestionar proyectos, ver estadísticas y realizar acciones principales.',
    keywords: ['dashboard', 'panel de control', 'usuario autenticado'],
};

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <div className={roboto.className}>
            <div className="bg-red-950 min-h-screen flex">
                <Sidebar />
                <div className="bg-red-100 flex-grow rounded-tl-[2rem] rounded-bl-[2rem] p-10">
                    {children}
                </div>
            </div>
        </div>
    )
}
