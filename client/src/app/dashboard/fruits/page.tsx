import FruitsPage from "@/app/fruits/page";
import Link from "next/link";
import { Suspense } from "react";

export default function ShowFruits() {
    return (
        <div className="flex justify-between items-start w-full p-4">
            <Suspense fallback={<h1>Cargando frutas...</h1>}>
                <FruitsPage />
            </Suspense>
            <Link
                className="bg-gradient-to-r from-red-600 via-red-800 to-red-950 text-yellow-300 px-8 py-3 rounded-xl shadow-lg shadow-red-500/50 hover:scale-105 hover:shadow-yellow-500/50 transition duration-300 ease-in-out font-bold tracking-wide"
                href="/dashboard/fruits/new"
            >
                <span>Add Fruit 🍓</span>
            </Link>
        </div>
    );
}
