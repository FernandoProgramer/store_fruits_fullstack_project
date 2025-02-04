import { ReactNode } from "react";

export default function ButtonForm({ children }: { children: ReactNode }) {
    return (
        <>
            <button
                type="submit"
                className="w-full py-3 text-xl font-semibold text-black bg-yellow-400 rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-200"
            >
                {children}
            </button>

        </>
    )
}
