import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export default class CreateCompany implements Seeder {
  async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into('companies')
      .values([
        {
          id: '12ad4d32-9748-46c3-8e43-269c2b7769c1',
          name: 'ford',
          address: 'Rua São Francisco',
          phone: '(68) 3977-6213',
        },
      ])
      .execute();
  }
}
