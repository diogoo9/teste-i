import { PartialType } from '@nestjs/mapped-types';
import { Company } from '../entities/company.entity';
import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateCompanyDto extends PartialType(Company) {
  @IsNotEmpty()
  address?: string;

  @IsNotEmpty()
  @MinLength(3)
  name?: string;

  @IsNotEmpty()
  phone?: string;
}
