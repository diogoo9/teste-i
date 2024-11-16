import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { hash } from 'bcrypt';

export default class CreateUser implements Seeder {
  async run(factory: Factory, connection: Connection): Promise<any> {
    const password = await hash('admin', 10);
    await connection
      .createQueryBuilder()
      .insert()
      .into('users')
      .values([
        {
          id: '06309f5d-82e1-473d-ba26-07f297c83245',
          company_id: '12ad4d32-9748-46c3-8e43-269c2b7769c1',
          name: 'ford',
          login: 'admin',
          password: password,
          is_admin: true,
        },
      ])
      .execute();
  }
}
