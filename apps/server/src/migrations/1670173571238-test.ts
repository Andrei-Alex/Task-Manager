import { MigrationInterface, QueryRunner } from 'typeorm';

export class migrations1668411426720 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "full_name" character varying NOT NULL)`
    );
    await queryRunner.query(`INSERT INTO "user" (full_name) VALUES ('john')`);
  }
  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(` DELETE FROM "user" WHERE full_name = 'john'`);
  }
}
