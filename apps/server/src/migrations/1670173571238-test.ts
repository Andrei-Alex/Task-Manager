import { MigrationInterface, QueryRunner } from 'typeorm';

export class migrations1668411426720 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO "user" (full_name, password, email) VALUES ('john', '$2b$10$o2EX8QQACkaN53v/Dn1h3eOq1329dF9H3M8d3oywhi.jA2KhFcarK', 'john@mail.com')`,
    );
  }
  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(` DELETE FROM "user" WHERE full_name = 'john'`);
  }
}
