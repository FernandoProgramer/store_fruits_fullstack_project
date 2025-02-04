import axios from "axios";
import { HandleAxiosError } from "./handleAxiosError";

/**
 * Configurar el axios
 */
export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL_PRINCIPAL_API
});

/**
 * Función para manejar las peticiones con manejo de errores automático.
 */
export async function Request<T>(fn: () => Promise<T>): Promise<T | null> {
    try {
        return await fn();
    } catch (error) {
        HandleAxiosError(error);
        return null;
    }
}