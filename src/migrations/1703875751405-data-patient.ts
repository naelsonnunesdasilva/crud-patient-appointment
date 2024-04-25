import { MigrationInterface, QueryRunner } from 'typeorm';

export class DataPatient1703875751405 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`INSERT INTO 
        Patient(id, name, email, cpf) 
        VALUES(1, 'lorem', 'lorem@gmail.com', '111.111.111-11')`);

    await queryRunner.query(`INSERT INTO 
        Patient(id, name, email, cpf) 
        VALUES(2, 'maria', 'maria@gmail.com', '222.222.222-22')`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM 
        Patient 
        WHERE id=1`);

    await queryRunner.query(`DELETE FROM 
        Patient 
        WHERE id=2`);
  }
}
