import { LoginInterface } from "@/interfaces/login.interface";
import { RegisterInterface } from "@/interfaces/register.interface";
import { api, Request } from '@/utils/WrapperApiClient';

/**
 * Servicio para el login.
 */
export async function LoginService(data: LoginInterface) {
    return Request(() => api.post('auth/login', data));
}

/**
 * Servicio para el register.
 */
export async function RegisterService(data: Omit<RegisterInterface, "confirmspassword">) {
    return Request(() => api.post('auth/register', data));
}