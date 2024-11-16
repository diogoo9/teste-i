import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import UserCompanies from '../entities/userCompanies.entity';

@Injectable()
export class UserCompaniesRepository extends Repository<UserCompanies> {
  constructor(dataSource: DataSource) {
    super(UserCompanies, dataSource.createEntityManager());
  }

  add(data: UserCompanies) {
    const userCompany = new UserCompanies();
    Object.assign(userCompany, data);
    return this.save(userCompany);
  }
}
