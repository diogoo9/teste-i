import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './repository/User.repository';
import { UserTokensModule } from '../user-tokens/user-tokens.module';

@Module({
  imports: [UserTokensModule],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}
