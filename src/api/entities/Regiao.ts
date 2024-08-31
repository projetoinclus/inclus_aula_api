import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Regiao {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome!: string;
}
