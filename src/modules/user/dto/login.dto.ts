import { PartialType } from '@nestjs/mapped-types';
import User from '../entities/user.entity';
import { IsNotEmpty } from 'class-validator';

export class UserLoginDto extends PartialType(User) {
  @IsNotEmpty()
  login?: string;

  @IsNotEmpty()
  password?: string;
}
