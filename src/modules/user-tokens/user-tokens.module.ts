import { Module } from '@nestjs/common';
import { UserTokensRepository } from './entities/repository/UserTokens.repository';

@Module({
  providers: [UserTokensRepository],
  exports: [UserTokensRepository],
})
export class UserTokensModule {}
