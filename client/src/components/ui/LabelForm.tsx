import { ReactNode } from "react";

export default function LabelForm({ name, children }: { name: string, children: ReactNode }) {
    return (
        <label htmlFor={name} className="block text-white">
            {children}
        </label>
    )
}
