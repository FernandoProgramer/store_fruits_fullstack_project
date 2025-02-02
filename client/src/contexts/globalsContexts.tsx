"use client"

import { createContext, ReactNode, useContext } from "react"

const GlobalContext = createContext<any>(null);


export function GlobalProvider({ children }: { children: ReactNode }) {
    return (
        <GlobalContext.Provider
            value={{}}
        >
            {children}
        </GlobalContext.Provider>

    );
}

export function useGlobalContext() {
    return useContext(GlobalContext);
}