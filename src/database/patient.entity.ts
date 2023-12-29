import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AppointmentEntity } from './appointment.entity';

@Entity('Patient')
export class PatientEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  public name: string;

  @Column()
  public email: string;

  @Column()
  public cpf: string;

  @Column({ nullable: true })
  public deleted_at?: Date | null;

  @OneToMany(() => AppointmentEntity, (appointment) => appointment)
  public medicalHistory: AppointmentEntity[];

  @CreateDateColumn()
  createdAt: Date;
}
