import { Product } from "src/product/entities/product.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
@Entity()
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

    @OneToMany(() => Product, (product) => product.user)
    product: Product[];
}
