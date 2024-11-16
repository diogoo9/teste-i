import { PartialType } from '@nestjs/mapped-types';
import { Vehicle } from '../entities/vehicle.entity';
import { IsNotEmpty } from 'class-validator';

export class CreateVehicleDto extends PartialType(Vehicle) {
  @IsNotEmpty({ message: 'company_id é obrigatporio' })
  company_id?: string;

  @IsNotEmpty({ message: 'lat é obrigatporio' })
  lat?: string;

  @IsNotEmpty({ message: 'license é obrigatporio' })
  license?: string;

  @IsNotEmpty({ message: 'long é obrigatporio' })
  long?: string;

  @IsNotEmpty({ message: 'vin é obrigatporio' })
  vin?: string;
}
