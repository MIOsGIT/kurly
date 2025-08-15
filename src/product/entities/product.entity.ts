import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
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

    @Column({ default: true })
    isActive: boolean;

    constructor(){
        this.isActive = true;
    }

    @ManyToOne(() => User, { onDelete: 'CASCADE' })
    user: User;

}
