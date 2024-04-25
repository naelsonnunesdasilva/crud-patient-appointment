import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
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
  public appointment: Date;

  @Column()
  public status: number;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => PatientEntity, (patient) => patient.medicalHistory)
  @JoinColumn({ name: 'fk_patient' })
  public patient: PatientEntity;
}
