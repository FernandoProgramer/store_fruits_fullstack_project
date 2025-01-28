import { IsEmail, IsNotEmpty, Min } from "class-validator"

export class RegisterDto {
    @IsEmail()
    @IsNotEmpty()
    email: string

    @Min(5)
    @IsNotEmpty()
    password: string

    @Min(5)
    @IsNotEmpty()
    username: string

    money: number
    role_id: number
}
