import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register-auth';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {

  constructor(private readonly prisma: PrismaService) { }

  async register(data: RegisterDto) {
    return await this.prisma.users.create({
      data
    })
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
