import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class UsersTokens1731615023600 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user_tokens',
        columns: [
          {
            name: 'token',
            type: 'varchar',
            isUnique: true,
            isPrimary: true,
          },
          { name: 'user_id', type: 'varchar', isNullable: false },
          {
            name: 'expire_date',
            type: 'timestamp',
            isNullable: false,
          },
          {
            name: 'canceled_at',
            type: 'timestamp',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          { name: 'deleted_at', type: 'timestamp', isNullable: true },
        ],
        foreignKeys: [
          {
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user_tokens');
  }
}
