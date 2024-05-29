import z, { boolean, string } from 'zod'


export const SchemaValidation = z.object({

    nombre: z.string().min(3, {
        message: "El nombre debe de tener minimo 3 caracteres de largo"
    }).max(10, {
        message: "El nombre deberia de tener 10 caracteres de largo"
    }),

    apellido: z.string().min(3, {
        message: 'El apellido no puede tener menos de 3 caracteres de largo'
    }).max(10, {
        message: 'tu apellido no puede tener mas de 10 caracteres'
    }),

    telefono: z.string().min(10, {
        message: "El teléfono debe tener al menos 10 caracteres"
    }).max(15, {
        message: "El teléfono debe tener máximo 15 caracteres"
    }).regex(/^\d+$/, {
        message: "El teléfono debe contener solo números"
    }),

    cedula: z.string().regex(/^\d+$/, {
        message: "La cedula lleva numeros"
    }),

    email: z.string().email({
        message: "Por favor ingresa un correo valido"
    }),


    password: z.string().min(6, {
        message: "El password debe de tener un minimo de 6"
    }),

    confirmarPassword: z.string().min(6, {
        message: "El password debe de tener un minimo de 6"
    }),

}).refine(data => data.password === data.confirmarPassword, {
    message: "Password debe de coincidir",
    path: ["confirmarPassword"] //mostrara error password debe de coincidir en confirmar password
})
