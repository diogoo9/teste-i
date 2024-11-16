import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Company } from '../entities/company.entity';
import { CreateCompanyDto } from '../dto/create-company.dto';

@Injectable()
export class ComapnyRepository extends Repository<Company> {
  constructor(dataSource: DataSource) {
    super(Company, dataSource.createEntityManager());
  }

  /*   getUserByLogin(login: string): Promise<User> {
    return this.findOneBy({ login });
  }

  
  
  updateUser(id: string, data: UpdateUserDto) {
    return this.update(id, data);
    } */

  async createCompany(data: CreateCompanyDto) {
    const company = new Company();
    Object.assign(company, data);
    const newCompany = await this.save(company);
    delete newCompany.deleted_at;
    return newCompany;
  }
  getAll(): Promise<Company[]> {
    return this.find();
  }

  findOneNoDeleted(data: { id?: string; login?: string }) {
    return this.findOne({
      where: { ...data },
    });
  }

  deleteCompany(id: string) {
    return this.softDelete({ id });
  }
}
