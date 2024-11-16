import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { UserToken } from '../user-token.entity';

@Injectable()
export class UserTokensRepository extends Repository<UserToken> {
  constructor(dataSource: DataSource) {
    super(UserToken, dataSource.createEntityManager());
  }

  add(data: any) {
    const token = new UserToken();
    Object.assign(token, data);
    return this.save(token);
  }
}
