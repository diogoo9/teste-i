import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './repository/User.repository';
import User from './entities/user.entity';
import { UserTokensModule } from '../user-tokens/user-tokens.module';

@Module({
  imports: [UserTokensModule],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}
