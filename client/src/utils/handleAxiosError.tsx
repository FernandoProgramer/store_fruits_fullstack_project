import { AxiosError } from "axios";
import { toast } from "sonner";

/**
 * Maneja los errores de Axios de manera uniforme.
 */
export function HandleAxiosError(error: unknown) {
    console.log(error)
    if (error instanceof AxiosError) {

        const code_error = error.status;
        const message_error = error.response?.data?.message;

        switch (code_error) {
            case 400:
                toast.error(message_error);
                break;
            case 401:
                toast.error("Unauthorized: Please log in again.");
                break;
            case 403:
                toast.error("Forbidden: You don't have access.");
                break;
            case 404:
                toast.error(message_error);
                break;
            case 409:
                toast.error(message_error);
                break;
            case 500:
                toast.error("Server Error: Try again later.");
                break;
            default:
                toast.error(message_error);
        }

    } else {
        toast.error('Oops... Algo fallo, intentalo más tarde');
    }
}