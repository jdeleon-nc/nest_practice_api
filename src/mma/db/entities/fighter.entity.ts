import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Fighter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  weightClass: string;
}
