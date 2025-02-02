import { LoginInterface } from "@/interfaces/login.interface";
import { RegisterInterface } from "@/interfaces/register.interface";

const URL_API_FRUITS = process.env.NEXT_PUBLIC_URL_PRINCIPAL_API + '/auth';

export async function LoginService(data: LoginInterface) {
    const response = await fetch(`${URL_API_FRUITS}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    return await response.json();
}

export async function RegisterService(data: RegisterInterface) {
    const response = await fetch(`${URL_API_FRUITS}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    return response.json();
}