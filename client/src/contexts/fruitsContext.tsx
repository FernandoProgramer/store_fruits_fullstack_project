"use client"

import useFetchFruits from "@/hooks/fetchFruits";
import { FruitsInterface } from "@/interfaces/fruits.interface";
import { createContext, ReactNode, useContext, useEffect, useState } from "react"


const FruitContext = createContext<any>(null)

export function FruitsProvider({ children, initalFruits }: { children: ReactNode, initalFruits: FruitsInterface[] }) {

    const { fruits } = useFetchFruits(initalFruits);

    return (
        <FruitContext.Provider value={{
            fruits
        }}>
            {children}
        </FruitContext.Provider>
    )
}
// TERMIAR DE CARGAR LAS COSAS
export function useFruitContext() {
    return useContext(FruitContext);
}