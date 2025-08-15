import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Product {
    @PrimaryGeneratedColumn()
    number: number;

    @Column()
    name: string;

    @Column()
    des: string;

    @Column()
    stock: number;

    @Column()
    price: number;

}
