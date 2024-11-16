import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export default class CreateUser implements Seeder {
  async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into('user_companies')
      .values([
        {
          company_id: '12ad4d32-9748-46c3-8e43-269c2b7769c1',
          user_id: '06309f5d-82e1-473d-ba26-07f297c83245',
        },
      ])
      .execute();
  }
}
