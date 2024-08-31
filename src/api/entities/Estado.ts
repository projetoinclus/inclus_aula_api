import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Estado {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome!: string;

  @Column()
  uf!: string;

  @Column()
  idRegiao!: number;
}
