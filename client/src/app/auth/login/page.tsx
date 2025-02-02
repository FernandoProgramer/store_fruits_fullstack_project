"use client"

import loginSchema from '@/validations/loginSchema'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import AlertError from '@/components/ui/AlertError'
import { LoginService } from '@/services/auth.service'
import InputForm from '@/components/ui/InputForm'

export interface FormInputs {
    email: string
    password: string
}

export default function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>({
        resolver: zodResolver(loginSchema)
    });

    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        console.log(data)
        try {
            const response = await LoginService(data);
            console.log(response)
        } catch (error) {
            console.error(error)
        }
    }

    return (

        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form
                className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm space-y-4"
                onSubmit={handleSubmit(onSubmit)}
            >
                <h2 className="text-2xl font-semibold text-center text-gray-800">Sign In</h2>

                <div className="space-y-2">
                    <label htmlFor="email" className="block text-gray-700">Email</label>
                    <InputForm
                        name="email"
                        register={register}
                        error={errors.email}
                        placeholder="Enter your email"
                    />

                </div>

                <div className="space-y-2">
                    <label htmlFor="password" className="block text-gray-700">Password</label>
                    <InputForm
                        name="password"
                        register={register}
                        error={errors.password}
                        placeholder="Enter your password"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Sign In
                </button>
            </form>
        </div>

    )
}
