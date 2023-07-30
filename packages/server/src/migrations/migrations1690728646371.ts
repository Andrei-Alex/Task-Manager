import { MigrationInterface, QueryRunner } from 'typeorm';

export class migrations1690728646371 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "board_column" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "order" integer NOT NULL, "boardId" integer, CONSTRAINT "PK_0273ece23af9b3e55ad6af2fdaa" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "board" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "date" TIMESTAMP NOT NULL DEFAULT now(), "ownerId" integer, CONSTRAINT "PK_865a0f2e22c140d261b1df80eb1" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "full_name" character varying NOT NULL, "password" character varying NOT NULL, "email" character varying NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(`CREATE INDEX "name-idx" ON "user" ("full_name") `);
    await queryRunner.query(
      `CREATE TABLE "user_boards_board" ("userId" integer NOT NULL, "boardId" integer NOT NULL, CONSTRAINT "PK_878ad615f92edb780a5c45fd9d0" PRIMARY KEY ("userId", "boardId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_d92c98138733350c58be167b78" ON "user_boards_board" ("userId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_ec241c244980d39996b501f397" ON "user_boards_board" ("boardId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "board_column" ADD CONSTRAINT "FK_7d6b58efcc37a760ffd108eec72" FOREIGN KEY ("boardId") REFERENCES "board"("id") ON DELETE SET NULL ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "board" ADD CONSTRAINT "FK_72a2bd5f275784b6bfa940c0ab6" FOREIGN KEY ("ownerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_boards_board" ADD CONSTRAINT "FK_d92c98138733350c58be167b78c" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_boards_board" ADD CONSTRAINT "FK_ec241c244980d39996b501f3970" FOREIGN KEY ("boardId") REFERENCES "board"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `INSERT INTO "user" (full_name, password, email) VALUES ('john', 'test', 'john@mail.com')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user_boards_board" DROP CONSTRAINT "FK_ec241c244980d39996b501f3970"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_boards_board" DROP CONSTRAINT "FK_d92c98138733350c58be167b78c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "board" DROP CONSTRAINT "FK_72a2bd5f275784b6bfa940c0ab6"`,
    );
    await queryRunner.query(
      `ALTER TABLE "board_column" DROP CONSTRAINT "FK_7d6b58efcc37a760ffd108eec72"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_ec241c244980d39996b501f397"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_d92c98138733350c58be167b78"`,
    );
    await queryRunner.query(`DROP TABLE "user_boards_board"`);
    await queryRunner.query(`DROP INDEX "public"."name-idx"`);
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "board"`);
    await queryRunner.query(`DROP TABLE "board_column"`);
  }
}
