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
  async register(data: RegisterDto,) {

    try {
      data.password = await hash(data.password, 10);

      const { password, role_id, ...new_user } = await this.prisma.users.create({ data });
      return new_user;

    } catch (error) {
      const { code, meta } = error;
      if (code === 'P2002') {
        if (meta?.target === 'users_username_key') {
          throw new ConflictException('The username already exists');
        }
        if (meta?.target === 'users_email_key') {
          throw new ConflictException('The email already exists');
        }
      }
      throw new InternalServerErrorException();
    }
  }

  async login(data: LoginDto) {
    try {

      const validate_email = await existEmail(data.email, this.prisma);
      if (!validate_email) throw new NotFoundException('Email not found');

      const { role_id, password: password_hash, ...user_info } = await this.prisma.users.findFirst({
        include: { role_user: true },
        where: { email: data.email }
      });

      const is_validate_password = await compare(data.password, password_hash);
      if (!is_validate_password) throw new UnauthorizedException('incorrect credentials');

      const token = await this.jwt.sign({ ...user_info });
      return token;

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


// POR FAVOR MI REY TIENES QUE CAMBIAR TODO JAJAJA HAZ QUE EL REQ Y ESO ESTE SOLO EN EL CONTROLADOR
// Y CAMBIA LA FORMA DE LOS SERVICIOS
// VAS BIEN BRO VAS A PODER CON TODO Y TENER TU ZX10R