import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('User')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  public username: string;

  @Column()
  public password: string;

  @CreateDateColumn()
  createdAt: Date;
}
