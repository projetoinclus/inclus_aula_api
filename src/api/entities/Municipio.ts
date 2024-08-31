import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Municipio {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome!: string;

  @Column()
  capital!: boolean;

  @Column()
  idEstado!: number;
}
