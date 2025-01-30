import { HttpException, HttpStatus, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateFruitDto } from './dto/create-fruit.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Response } from 'express';
import { ListFruitsDto } from './dto/list-fruit.dto';
import { UpdateFruitDto } from './dto/update-fruit.dto';
import { InvalidIdException } from 'http_exceptions/invalid_id.exception';

@Injectable()
export class FruitsService {

  constructor(private readonly prisma: PrismaService) { }

  async create(data: CreateFruitDto, sellerId: number): Promise<ListFruitsDto> {

    try {
      const data_updated = { ...data, seller_id: sellerId }
      const new_fruit = await this.prisma.fruits.create({
        data: data_updated
      });

      return new_fruit;

    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async findAll(): Promise<ListFruitsDto[]> {
    try {
      const fruits = await this.prisma.fruits.findMany({
        include: {
          seller: {
            omit: {
              password: true,
              role_id: true
            },
          },
        },
        orderBy: {
          id: 'desc',
        },
      })
      return fruits;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async findOne(id: number): Promise<ListFruitsDto> {

    if (isNaN(id)) {
      throw new InvalidIdException();
    }

    try {
      const fruit = await this.prisma.fruits.findFirst({
        where: { id },
        include: {
          seller: {
            omit: {
              password: true,
              role_id: true
            },
          },
        },
      });

      if (!fruit) throw new NotFoundException(`fruit not found by id - ${id}`);

      return fruit;
    } catch (error) {
      if (error instanceof NotFoundException) throw error;

      throw new InternalServerErrorException();
    }
  }

  async update(id: number, data: UpdateFruitDto, seller_id: number): Promise<ListFruitsDto | string> {

    if (isNaN(id)) {
      throw new InvalidIdException();
    }

    try {
      const fruit_updated = await this.prisma.fruits.update({
        where: { id, seller_id },
        data: data,
      });

      return fruit_updated;

    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`fruit not found by id - ${id}`);
      }

      throw new InternalServerErrorException();
    }
  }

  async remove(id: number, seller_id: number): Promise<void> {
    if (isNaN(id)) {
      throw new InvalidIdException();
    }

    try {

      await this.prisma.fruits.delete({
        where: {
          id,
          seller: { id: seller_id }
        }
      });

      return

    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`fruit not found by id - ${id}`);
      }
      throw new InternalServerErrorException();
    }
  }
}
