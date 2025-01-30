import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class CreateFruitDto {

    @IsString()
    @IsNotEmpty()
    fruit: string

    @IsNumber()
    @IsNotEmpty()
    amount: number

    @IsNotEmpty()
    @IsNumber()
    price: number

    @IsOptional()
    @IsString()
    description?: string

}
