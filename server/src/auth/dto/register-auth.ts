import { IsEmail, IsNotEmpty, IsString, Min, MinLength } from "class-validator"

export class RegisterDto {
    @IsEmail()
    @IsNotEmpty()
    @IsString()
    email: string

    @MinLength(8)
    @IsNotEmpty()
    @IsString()
    password: string

    @MinLength(5)
    @IsString()
    @IsNotEmpty()
    username: string

    money: number
    role_id: number
}
