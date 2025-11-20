import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Fighter {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  weightClass: string;
}
