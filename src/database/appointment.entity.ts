import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';


@Entity('Arquivo')
export class ArchiveOrmEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'urlS3' })
  public urlS3: string;

  @OneToOne('ContentOrmEntity', 'archive')
  public content: any;
}
