import { JSX, ReactNode } from "react";

export default function ButtonForm({ children, icon }: { children: ReactNode, icon?: JSX.Element }) {
    return (
        <div className="relative w-full">
            <button
                type="submit"
                className={`w-full py-3 text-xl font-semibold text-black bg-yellow-400 rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-200 flex items-center justify-center`}
            >
                {children}
                {icon && (
                    <span className="ml-2 text-black text-[1.5rem] font-semibold">
                        {icon}
                    </span>
                )}
            </button>
        </div>
    );
}
