import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { ComapnyRepository } from './repository/company.repository';
import { UserCompaniesRepository } from '../user/repository/UserCompanies.repository';
import { VehicleRepository } from '../vehicle/repository/vehicle.repository';

@Module({
  controllers: [CompanyController],
  providers: [
    CompanyService,
    ComapnyRepository,
    UserCompaniesRepository,
    VehicleRepository,
  ],
})
export class CompanyModule {}
