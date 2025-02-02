"use client"

import { FruitsInterface } from "@/interfaces/fruits.interface"
import { addFruit } from "@/services/fruits.service";
import { useState } from "react"

export default function useFetchFruits(initalFruits: FruitsInterface[]) {

    const [fruits, setFruits] = useState<FruitsInterface[]>(initalFruits);

    async function handleAddFruit(new_fruit: Omit<FruitsInterface, "id">) {
        const fruit = await addFruit(new_fruit);
        if (fruit) setFruits([...fruits, fruit]);
    }

    return {
        fruits,
        handleAddFruit
    }
}
