import { Column, PrimaryColumn } from "typeorm";

export class User {
    @PrimaryColumn()
    id: string;

    @Column()
    pw: string;

    @Column()
    name: string;

    @Column()
    age: number;

    @Column()
    isSeller: boolean;
}
