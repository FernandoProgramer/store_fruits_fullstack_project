import ResponsiveSidebar from "@/components/ui/Sidebar";
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
            <ResponsiveSidebar>
                {children}
            </ResponsiveSidebar>
        </div>

    )
}
