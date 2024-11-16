import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { ComapnyRepository } from './repository/company.repository';
import { AppError } from 'src/errors/AppError';
import { UserCompaniesRepository } from '../user/repository/UserCompanies.repository';
import { VehicleRepository } from '../vehicle/repository/vehicle.repository';

@Injectable()
export class CompanyService {
  constructor(
    private comapnyRepository: ComapnyRepository,
    private userComapnyRepository: UserCompaniesRepository,
    private vehicleRepository: VehicleRepository,
  ) {}

  async create(createCompanyDto: CreateCompanyDto, user_id: string) {
    const company =
      await this.comapnyRepository.createCompany(createCompanyDto);
    await this.userComapnyRepository.add({
      company_id: company.id,
      user_id,
    });

    return company;
  }

  findAll(userId: string) {
    return this.comapnyRepository.getAll(userId);
  }

  async remove(id: string, userId: string) {
    const company = await this.comapnyRepository.findOneNoDeleted(id, userId);

    if (!company) {
      throw new AppError('Organização não encontrada', 404);
    }
    await this.comapnyRepository.deleteCompany(id);
    await this.vehicleRepository.deleteVehicleByCompanyId(company.id);

    return {
      statusCode: 200,
      message: 'Organização Excluida com sucesso',
    };
  }
}
