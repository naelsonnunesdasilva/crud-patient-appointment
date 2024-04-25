import { MigrationInterface, QueryRunner } from 'typeorm';

export class DataAppointment1703876064615 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`INSERT INTO 
        Appointment(id, fk_patient, status, appointment) 
        VALUES(1, 1, 0, '2023-01-08')`);

    await queryRunner.query(`INSERT INTO 
        Appointment(id, fk_patient, status, appointment) 
        VALUES(2, 2, 1, '2023-01-10')`);

    await queryRunner.query(`INSERT INTO 
        Appointment(id, fk_patient, status, appointment) 
        VALUES(3, 1, 0, '2023-02-01')`);

    await queryRunner.query(`INSERT INTO 
        Appointment(id, fk_patient, status, appointment) 
        VALUES(4, 1, 2, '2023-03-03')`);

    await queryRunner.query(`INSERT INTO 
        Appointment(id, fk_patient, status, appointment) 
        VALUES(5, 2, 0, '2023-02-02')`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM 
        Appointment 
        WHERE id=1`);

    await queryRunner.query(`DELETE FROM 
        Appointment 
        WHERE id=2`);

    await queryRunner.query(`DELETE FROM 
        Appointment 
        WHERE id=3`);

    await queryRunner.query(`DELETE FROM 
        Appointment 
        WHERE id=4`);

    await queryRunner.query(`DELETE FROM 
        Appointment 
        WHERE id=5`);
  }
}
