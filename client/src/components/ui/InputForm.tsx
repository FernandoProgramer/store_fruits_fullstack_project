import React, { JSX, useState } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'
import AlertError from './AlertError'
import { FaEye } from 'react-icons/fa'
import { LuEyeClosed } from "react-icons/lu";


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string
    register: UseFormRegister<any> // Para pasar el tipo de register
    error?: FieldError // Para pasar los errores existentes
    icon?: JSX.Element
    type?: string
}

export default function InputForm({ register, name, error, icon, type = 'text', ...props }: InputProps) {

    const iconClassName = "text-red-700 text-[1.5rem] font-semibold absolute right-4 top-1/2 transform -translate-y-1/2";
    const [showPassword, setShowPassword] = useState(false);

    function HandleShowPassword(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        setShowPassword(!showPassword);
    }


    return (
        <>
            <div className="relative w-full">
                <input
                    id={name}
                    type={type === 'password' && showPassword ? "text" : type}
                    {...props}
                    {...register(name)}
                    className={`w-full px-4 py-2 border-2 ${error ? 'border-red-600' : 'border-yellow-500'} rounded-full focus:outline-none bg-gray-100 text-gray-900 placeholder-gray-500 transition z-1 pr-10`}
                />
                {icon && (
                    <span className={iconClassName}>
                        {icon}
                    </span>
                )}

                {type && type === "password" && (
                    <button
                        onClick={(e) => HandleShowPassword(e)}
                        className={iconClassName}>
                        {showPassword ? <LuEyeClosed /> : <FaEye />}
                    </button>
                )}
            </div>
            {error && <AlertError message={error?.message || "Error desconocido"} />}
        </>
    )
}
