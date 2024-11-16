import { DataSource, Repository } from 'typeorm';
import User from '../entities/user.entity';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }
  getUserByLogin(login: string): Promise<User> {
    return this.findOneBy({ login });
  }

  getAll(): Promise<User[]> {
    return this.find({ select: ['id', 'name', 'login', 'is_admin'] });
  }

  findOneNoDeleted(data: { id?: string; login?: string }) {
    return this.findOne({
      where: { ...data, deleted_at: null },
      select: ['id', 'name', 'login', 'is_admin'],
    });
  }

  deleteUser(id: string) {
    return this.softDelete({ id });
  }

  updateUser(id: string, data: UpdateUserDto) {
    return this.update(id, data);
  }

  async createUser(data: CreateUserDto) {
    const user = new User();
    Object.assign(user, data);
    const newUser = await this.save(user);
    delete newUser.deleted_at;
    delete newUser.password;
    return newUser;
  }
}
