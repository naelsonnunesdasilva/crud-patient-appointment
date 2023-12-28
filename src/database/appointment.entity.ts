import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PatientEntity } from './patient.entity';

@Entity('Appointment')
export class AppointmentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  public fk_patient: number;

  @Column()
  appointment: Date;

  @CreateDateColumn()
  created_at: Date;

  @OneToOne(() => PatientEntity, (patient) => patient.id)
  public patient: PatientEntity;
}
