import { IsNumber, IsOptional, IsString } from "class-validator"

export class ListFruitsDto {
    @IsNumber()
    id: number

    @IsString()
    fruit: string

    @IsNumber()
    amount: number

    @IsString()
    @IsOptional()
    description: string

    @IsNumber()
    seller_id: number
}