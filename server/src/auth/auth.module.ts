import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaSerive } from 'src/prisma/prisma.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaSerive],
})
export class AuthModule { }
