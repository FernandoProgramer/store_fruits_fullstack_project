import { Module } from '@nestjs/common';
import { FruitsService } from './fruits.service';
import { FruitsController } from './fruits.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [FruitsController],
  providers: [FruitsService, PrismaService],
})
export class FruitsModule { }
