import { PartialType } from '@nestjs/mapped-types';
import User from '../entities/user.entity';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto extends PartialType(User) {
  @IsNotEmpty()
  name?: string;

  @IsNotEmpty()
  company_id: string;

  @IsNotEmpty()
  login?: string;

  @IsNotEmpty()
  password?: string;

  @IsNotEmpty()
  is_admin?: boolean;
}
