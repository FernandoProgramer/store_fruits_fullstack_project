import { ConflictException, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { RegisterDto } from './dto/register-auth';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/login-auth';
import { compare, hash } from 'bcrypt';
import { existEmail } from 'common/validate-email.common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';

@Injectable()
export class AuthService {

  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService

  ) { }

  // Registro de usuarios
  async register(data: RegisterDto, res: Response) {
    const { password } = data;

    const hashPass = await hash(password, 10);
    const data_updated = { ...data, password: hashPass };

    try {
      const response = await this.prisma.users.create({
        data: data_updated
      });

      const { password, role_id, ...newUser } = response;

      res.json({
        message: "successful registration",
        newUser
      });

    } catch (error) {
      const { code, meta } = error;
      if (code === 'P2002') {
        if (meta.target === 'users_username_key') {
          throw new ConflictException('The username already exists');
        }
        if (meta.target === 'users_email_key') {
          throw new ConflictException('The email already exists');
        }
      }
      throw new InternalServerErrorException();
    }
  }

  async login(data: LoginDto, res: Response) {
    const { email, password } = data;
    try {
      // Email validation
      const validate_email = await existEmail(email, this.prisma);
      if (!validate_email) throw new NotFoundException('Email not found');

      // Compare credentials
      const { role_id, password: password_hash, ...user_info } = await this.prisma.users.findFirst({
        include: {
          role_user: true
        },
        where: {
          email
        }
      });

      const is_validate_password = await compare(password, password_hash);
      if (!is_validate_password) throw new UnauthorizedException('incorrect credentials');

      // Create payload
      const payload = { ...user_info };
      const token = await this.jwt.sign(payload);

      res
        .cookie('token', token, {
          path: '/',
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          maxAge: 1 * 60 * 60 * 1000
        })
        .json({
          message: "Successful authentication"
        });

    } catch (error) {
      if (error instanceof NotFoundException) throw error;

      if (error instanceof UnauthorizedException) throw error;

      throw new InternalServerErrorException();
    }

  }

  // METODO DE DEPURACIÓN
  getcookie(req: Request) {
    console.log(req.cookies)
  }
}