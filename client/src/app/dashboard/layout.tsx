// app/dashboard/layout.tsx (DashboardLayout)
import Sidebar from "@/components/layouts/Sidebar";
import { Roboto } from "next/font/google";
import { ReactNode } from "react";
import { Toaster } from "sonner";

export const metadata = {
    title: 'Dashboard | Store Fruits 🍊',
    description: 'Accede a tu panel de control para gestionar proyectos, ver estadísticas y realizar acciones principales.',
    keywords: ['dashboard', 'panel de control', 'usuario autenticado'],
};

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
});

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="es">
            <body>
                <div className={roboto.className}>
                    <Toaster />
                    <div className="bg-[#222124] min-h-screen flex">
                        <Sidebar />
                        <div className="bg-[#141414] flex-grow p-4">
                            {children}
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}