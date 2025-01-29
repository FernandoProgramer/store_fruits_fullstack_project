import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private readonly jwtService: JwtService) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {

    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenCookie(request);


    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      const payload = await this.jwtService.verify(token, {
        secret: process.env.JWT_SECRECT
      });

      request['payload'] = payload;

    } catch (error) {
      throw new UnauthorizedException();
    }

    return true
  }
  
  private extractTokenCookie(request: Request): string | undefined {
    const token = request.cookies.token;
    return token ?? undefined;

  }
}
