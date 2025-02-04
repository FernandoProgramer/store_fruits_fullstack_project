import { z } from 'zod';

const registerSchema = z.object({
    email: z.string()
        .email("Dirección de correo electrónico inválida")
        .min(1, "El correo electrónico es obligatorio"),

    password: z.string()
        .min(8, "La contraseña debe tener al menos 6 caracteres")
        .max(20, "La contraseña no puede exceder los 20 caracteres")
        .regex(/[A-Z]/, "La contraseña debe contener al menos una letra mayúscula")
        .regex(/\d/, "La contraseña debe contener al menos un número")
        .regex(/[a-z]/, "La contraseña debe contener al menos una letra minúscula"),

    confirmspassword: z.string(),

    username: z.string()
        .min(1, "El nombre de usuario es obligatorio")
        .max(20, "El nombre de usuario no puede exceder los 20 caracteres")
})
    .refine(data => data.password === data.confirmspassword, {
        message: "Las contraseñas no coinciden",
        path: ["confirmspassword"],
    });

export default registerSchema;
