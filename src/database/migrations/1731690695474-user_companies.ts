import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class UserCompanies1731690695474 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user_companies',
        columns: [
          {
            name: 'user_id',
            type: 'varchar',
            isNullable: false,
            isPrimary: true,
          },
          {
            name: 'company_id',
            type: 'varchar',
            isNullable: false,
            isPrimary: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
          },
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
    await queryRunner.dropTable('user_companies');
  }
}
