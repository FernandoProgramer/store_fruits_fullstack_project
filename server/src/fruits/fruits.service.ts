import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateFruitDto } from './dto/create-fruit.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Request, Response } from 'express';
import { ListFruitsDto } from './dto/list-fruit.dto';

@Injectable()
export class FruitsService {

  constructor(private readonly prisma: PrismaService) { }

  async create(data: CreateFruitDto, sellerId: number) {
    
    const data_updated = { ...data, seller_id: sellerId }
    try {
      const new_fruit = await this.prisma.fruits.create({
        data: data_updated
      });

      return new_fruit;

    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async findAll(res: Response) {
    try {
      const response = await this.prisma.fruits.findMany({
        include: { seller: true }
      })
      res.json(response);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} fruit`;
  }

  update(id: number, updateFruitDto) {
    return `This action updates a #${id} fruit`;
  }

  remove(id: number) {
    return `This action removes a #${id} fruit`;
  }
}
