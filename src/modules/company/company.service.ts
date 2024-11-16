import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { ComapnyRepository } from './repository/company.repository';
import { AppError } from 'src/errors/AppError';

@Injectable()
export class CompanyService {
  constructor(private comapnyRepository: ComapnyRepository) {}

  create(createCompanyDto: CreateCompanyDto) {
    return this.comapnyRepository.createCompany(createCompanyDto);
  }

  findAll() {
    return this.comapnyRepository.getAll();
  }

  async remove(id: string) {
    const company = await this.comapnyRepository.findOneNoDeleted({ id });

    if (!company) {
      throw new AppError('Organização não encontrada', 404);
    }
    const { affected } = await this.comapnyRepository.deleteCompany(id);

    if (affected == 1) {
      return {
        statusCode: 200,
        message: 'Organização Excluida com sucesso',
      };
    }
  }
}
