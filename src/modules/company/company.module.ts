import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { ComapnyRepository } from './repository/company.repository';

@Module({
  controllers: [CompanyController],
  providers: [CompanyService, ComapnyRepository],
})
export class CompanyModule {}
