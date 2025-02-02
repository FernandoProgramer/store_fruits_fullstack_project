import { z } from 'zod';

const loginSchema = z.object({
    email: z.string()
        .min(1, { message: 'El email es obligatorio' })
        .email({ message: 'El formato del email no es válido' }),

    password: z.string()
        .min(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
        .max(20, { message: 'La contraseña no debe superar los 20 caracteres' })
});

export default loginSchema;
