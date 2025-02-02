import React from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'
import AlertError from './AlertError'


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string
    register: UseFormRegister<any> // Para pasar el tipo de register
    error?: FieldError // Para pasar los errores existentes
}

export default function InputForm({ register, name, error, ...props }: InputProps) {

    return (
        <>
            <input
                id={name}
                {...props}
                {...register(name)}
                className={`w-full px-4 py-2 border-2 ${error ? 'border-red-600' : 'border-cyan-500'} rounded-lg focus:outline-none bg-gray-100 text-gray-900 placeholder-gray-500 transition`}
            />


            {error && <AlertError message={error?.message || "Error desconocido"} />}
        </>
    )
}
