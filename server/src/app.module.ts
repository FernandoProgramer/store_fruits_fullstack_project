import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { FruitsModule } from './fruits/fruits.module';

@Module({
  imports: [UsersModule, AuthModule, FruitsModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
