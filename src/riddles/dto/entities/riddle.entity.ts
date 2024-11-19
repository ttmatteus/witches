import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Riddle {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    answer: string

    @Column()
    phase: number;
}