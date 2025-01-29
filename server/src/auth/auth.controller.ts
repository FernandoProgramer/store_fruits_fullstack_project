import { Controller, Post, Body, HttpCode, Res, Get, Req, InternalServerErrorException, ConflictException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register-auth';

import { LoginDto } from './dto/login-auth';
import { Request, Response } from 'express';
import { hash } from 'bcrypt';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('register')
  @HttpCode(200)
  async create(@Body() registerUser: RegisterDto) {

    registerUser.password = await hash(registerUser.password, 10);
    return await this.authService.register(registerUser);
  }

  @Post('login')
  @HttpCode(200)
  async login(@Body() loginUser: LoginDto, @Res() res: Response) {
    return await this.authService.login(loginUser, res);
  }

  // RECUPERACION DE CONTRASELA (Forgot password)

  // CERRAR SESION (Logout)

  // CAMBIAR CONTRASEÑA (Reset password)

  // RUTA DE DEPURACIÓN
  @Get('cookies')
  @HttpCode(200)
  async getcookies(@Req() req: Request) {
    return this.authService.getcookie(req);
  }
}
