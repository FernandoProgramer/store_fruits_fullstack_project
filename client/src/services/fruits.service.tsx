import { FruitsInterface } from "../interfaces/fruits.interface";

const URL_API_FRUITS = process.env.NEXT_PUBLIC_URL_PRINCIPAL_API + '/fruits';

export async function getFruits(): Promise<FruitsInterface[]> {
    try {
        const fruits = await fetch(`${URL_API_FRUITS}`, { cache: 'no-store' });
        return await fruits.json();
    } catch (error) {
        return []
    }
}

export async function addFruit(newFruit: Omit<FruitsInterface, "id">): Promise<FruitsInterface | undefined> {
    try {
        const response = await fetch(`${URL_API_FRUITS}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newFruit)
        });
        return await response.json();
    } catch (error) {
        return
    }
}