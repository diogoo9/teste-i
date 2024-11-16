import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Company1731360154686 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'companies',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isNullable: false,
            isPrimary: true,
            isUnique: true,
          },
          { name: 'name', type: 'varchar', isNullable: false },
          { name: 'address', type: 'varchar', isNullable: false },
          { name: 'phone', type: 'varchar', isNullable: false },
          { name: 'deleted_at', type: 'timestamp', isNullable: true },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('companies');
  }
}
