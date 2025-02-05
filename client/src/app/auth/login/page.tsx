"use client"

import loginSchema from '@/validations/loginSchema'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginService } from '@/services/auth.service'
import InputForm from '@/components/ui/InputForm'
import ButtonForm from '@/components/ui/ButtonForm'
import Link from 'next/link'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

export interface FormInputs {
    email: string
    password: string
}

export default function LoginPage() {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>({
        resolver: zodResolver(loginSchema)
    });

    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        const res = await LoginService(data);
        if (res) {
            toast.success('Successful authentication my king ❤');
            router.push('/dashboard');
        }
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-900">
            <form
                className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-sm space-y-4"
                onSubmit={handleSubmit(onSubmit)}
            >
                <h2 className="text-2xl font-semibold text-center text-white">Sign In</h2>

                <div className="space-y-2">
                    <label htmlFor="email" className="block text-white">Email</label>
                    <InputForm
                        name="email"
                        register={register}
                        error={errors.email}
                        placeholder="Enter your email"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="password" className="block text-white">Password</label>
                    <InputForm
                        name="password"
                        register={register}
                        error={errors.password}
                        placeholder="Enter your password"
                    />
                </div>
                <div>
                    <p className="font-light text-yellow-50 space-x-2">
                        <span>
                            ¿Do you don't have a count?
                        </span>
                        <Link
                            className="font-medium text-yellow-400"
                            href="/auth/register"
                        >
                            Sing Up Here
                        </Link>
                    </p>
                </div>
                <ButtonForm>
                    Sign in
                </ButtonForm>
            </form>
        </div>
    )
}
