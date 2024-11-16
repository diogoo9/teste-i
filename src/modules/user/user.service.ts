import { UserRepository } from './repository/User.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserLoginDto } from './dto/login.dto';
import { Injectable } from '@nestjs/common';
import { compare } from 'bcrypt';
import { AppError } from 'src/errors/AppError';
import { sign } from 'jsonwebtoken';
import { UserTokensRepository } from '../user-tokens/entities/repository/UserTokens.repository';
import User from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
    private userTokensRepository: UserTokensRepository,
  ) {}

  findAll() {
    return this.userRepository.getAll();
  }

  async create(userData: CreateUserDto) {
    const user = await this.userRepository.findOneNoDeleted({
      login: userData.login,
    });

    if (user) {
      throw new AppError('Usuario não existe', 404);
    }
    return this.userRepository.createUser(userData);
  }

  async auth({ login, password }: UserLoginDto) {
    const user = await this.userRepository.getUserByLogin(login);

    if (!user) {
      throw new AppError('usuário ou senha inválida', 400);
    }

    const comparePassWordResult = await compare(password, user.password);

    if (!comparePassWordResult) {
      throw new AppError('usuário ou senha inválida', 400);
    }

    const currentDate = new Date();
    const expireDate = new Date(currentDate);
    expireDate.setDate(currentDate.getDate() + 2);

    const hash = sign({ id: user.id }, process.env.BCRYPT_KEY, {
      subject: String(user.id),
      expiresIn: '2d',
    });

    const tokenData = {
      canceled_at: null,
      created_at: currentDate,
      expire_date: expireDate,
      token: hash,
      user_id: user.id,
    };

    this.userTokensRepository.add(tokenData);

    return hash;
  }

  findOne(id: string): Promise<User> {
    return this.userRepository.findOneNoDeleted({ id });
  }

  async update(id: string, updateData: UpdateUserDto) {
    const user = await this.userRepository.findOneNoDeleted({ id });

    if (!user) {
      throw new AppError('Usuario não existe', 404);
    }
    const updateRes = await this.userRepository.updateUser(id, updateData);
    if (updateRes.affected == 1) {
      return {
        statusCode: 200,
        message: 'Usuario alterado com sucesso',
      };
    }
  }

  async remove(id: string) {
    const user = await this.userRepository.findOneNoDeleted({ id });

    if (!user) {
      throw new AppError('Usuario inválido', 404);
    }

    const res = await this.userRepository.deleteUser(id);
    if (res.affected == 1) {
      return {
        message: 'Usuario excluido com sucesso',
      };
    }
  }
}
