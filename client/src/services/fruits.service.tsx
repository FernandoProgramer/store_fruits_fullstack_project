import { api, Request } from "@/utils/WrapperApiClient";
import { FruitsInterface } from "../interfaces/fruits.interface";

/**
 * Servicio Get para las frutas
 */
export async function getFruits(): Promise<FruitsInterface[]> {
    const response = await Request<FruitsInterface[]>(() => api.get('/fruits'));
    return response || [];
}

/**
 * Servicio Post para crear frutas
 */
export async function addFruit(newFruit: Omit<FruitsInterface, "id">): Promise<FruitsInterface | null> {
    const response = Request<FruitsInterface>(() => api.post('/fruits', newFruit));
    return response || null;
}