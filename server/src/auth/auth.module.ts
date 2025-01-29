import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  
  // Importar el modulo de JWT con configuraiones
  imports: [JwtModule.register({
    global: true,
    secret: process.env.SECRET_JWT,
    signOptions: {
      expiresIn: '1h'
    }
  })],
  controllers: [AuthController],
  providers: [AuthService, PrismaService],
})
export class AuthModule { }
