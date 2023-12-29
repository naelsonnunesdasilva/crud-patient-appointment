import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('User')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  public username: string;

  @Column()
  public password: string;

  @CreateDateColumn()
  createdAt: Date;
}
