"use client"

import { createContext, ReactNode, useContext } from "react";
import { Toaster } from "sonner";

const ToastContext = createContext<any>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
    return (
        <ToastContext.Provider value={{}}>
            {children}

            <Toaster richColors />
        </ToastContext.Provider>
    )
}

export function useToastContex() {
    return useContext(ToastContext);
}