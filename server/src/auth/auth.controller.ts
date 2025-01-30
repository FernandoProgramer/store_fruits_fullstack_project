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
  create(@Body() registerUser: RegisterDto) {
    return this.authService.register(registerUser);
  }

  @Post('login')
  @HttpCode(200)
  async login(@Body() loginUser: LoginDto, @Res() res: Response) {

    const token = await this.authService.login(loginUser);
    return res
      .cookie('token', token, {
        path: '/',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 1 * 60 * 60 * 1000
      })
      .json({
        message: "Successful authentication"
      });
  }

  // RECUPERACION DE CONTRASELA (Forgot password)

  // CERRAR SESION (Logout)

  // CAMBIAR CONTRASEÑA (Reset password)

  // ruta de depuración
  @Get('cookies')
  @HttpCode(200)
  getcookies(@Req() req: Request) {
    return req.cookies;
  }
}
