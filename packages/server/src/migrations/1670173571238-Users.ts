import { MigrationInterface, QueryRunner } from 'typeorm';

export class migrations1668411426720 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
        `CREATE TABLE "user" ("id" SERIAL NOT NULL, "full_name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
        `INSERT INTO "user" (full_name, password, email) VALUES ('john', '$2b$10$o2EX8QQACkaN53v/Dn1h3eOq1329dF9H3M8d3oywhi.jA2KhFcarK', 'john@mail.com')`,
    );
  }
  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(` DELETE FROM "user" WHERE full_name = 'john'`);
  }
}
