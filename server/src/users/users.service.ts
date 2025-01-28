import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaSerive } from 'src/prisma/prisma.service';
import { UserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {

  constructor(private readonly prisma: PrismaSerive) { }

  async findAll(): Promise<UserDto[]> {
    return await this.prisma.users.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.users.findMany();

  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.prisma.users.findMany();

  }

}
