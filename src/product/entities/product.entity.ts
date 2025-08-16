import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { create_product_request_dto } from "../dto/create.product.request.dto";
import { find_one_product_response_dto } from "../dto/find-one.product.response.dto";

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

    setter(body: create_product_request_dto){
        this.name = body.name;
        this.des = body.des;
        this.stock = body.stock;
        this.price = body.price;
    }
    toFindOneResponse(): find_one_product_response_dto {
        return {
            number: this.number,
            name: this.name,
            des: this.des,
            stock: this.stock,
            price: this.price,
            isActive: this.isActive,
        };
    }
}
