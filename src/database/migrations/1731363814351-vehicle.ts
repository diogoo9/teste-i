import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Vehicle1731363814351 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'vehicles',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isNullable: false,
            isPrimary: true,
            isUnique: true,
          },
          { name: 'company_id', type: 'varchar', isNullable: false },
          { name: 'license', type: 'varchar', isNullable: false },
          { name: 'vin', type: 'varchar', isNullable: false },
          { name: 'lat', type: 'varchar', isNullable: false },
          { name: 'long', type: 'varchar', isNullable: false },
          { name: 'deleted_at', type: 'timestamp', isNullable: true },
        ],
        foreignKeys: [
          {
            columnNames: ['company_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'companies',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('vahicles');
  }
}
