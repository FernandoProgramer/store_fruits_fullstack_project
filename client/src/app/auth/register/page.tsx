"use client"
import EmailIcon from "@/components/icons/EmailIcon";
import UsernameIcon from "@/components/icons/UsernameIcon";
import ButtonForm from "@/components/ui/ButtonForm";
import InputForm from "@/components/ui/InputForm";
import { RegisterInterface } from "@/interfaces/register.interface";
import { RegisterService } from "@/services/auth.service";
import registerSchema from "@/validations/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { GiFruiting } from "react-icons/gi";
import { toast } from "sonner";

interface FormInputsRegister extends RegisterInterface { }

export default function RegisterPage() {
  const router = useRouter();


  const { register, handleSubmit, formState: { errors } } = useForm<FormInputsRegister>({
    resolver: zodResolver(registerSchema)
  });

  const onSubmit: SubmitHandler<FormInputsRegister> = async (data) => {
    const res = await RegisterService(data);
    if (res) {
      toast.success('Registered correctly beautiful ❤, now Sing In Here', {
        action: {
          label: 'Sing in Here',
          onClick: () => router.push('/auth/login')
        }
      });
    }
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="flex shadow-lg rounded-lg overflow-hidden max-w-4xl w-full bg-gray-800">

          {/* Contenedor de la imagen */}
          <div className="w-1/2 h-[600px] overflow-hidden">
            <figure className="w-full h-full">
              <img
                src="https://thumbs.dreamstime.com/b/frutas-mezcladas-frescas-50188610.jpg"
                alt="Imagen de frutas register"
                className="w-full h-full object-cover"
              />
            </figure>
          </div>

          {/* Formulario a la derecha */}
          <div className="w-1/2 p-8">
            <h2 className="text-2xl font-semibold text-center text-white mb-4">Sign Up</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-white">Email</label>
                <InputForm
                  name="email"
                  register={register}
                  error={errors.email}
                  placeholder="Enter your email"
                  icon={<EmailIcon />}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="block text-white">Password</label>
                <InputForm
                  name="password"
                  register={register}
                  error={errors.password}
                  placeholder="Enter your password"
                  type="password"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="confirmspassword" className="block text-white">Confirm Password</label>
                <InputForm
                  name="confirmspassword"
                  register={register}
                  error={errors.confirmspassword}
                  placeholder="Confirm Password"
                  type="password"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="username" className="block text-white">Username</label>
                <InputForm
                  name="username"
                  register={register}
                  error={errors.username}
                  placeholder="Enter your Username"
                  icon={<UsernameIcon />}
                />
              </div>

              <div className="flex items-center space-x-2">
                <p className="font-light text-yellow-50">
                  ¿Do you have an account?
                </p>
                <Link
                  className="font-medium text-yellow-400"
                  href="/auth/login"
                >
                  Sing In Here
                </Link>
              </div>

              <ButtonForm icon={<GiFruiting />}>
                Sign Up
              </ButtonForm>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}