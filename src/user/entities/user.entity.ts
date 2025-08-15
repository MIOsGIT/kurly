import { Product } from "src/product/entities/product.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { create_user_request_dto } from "../dto/create.user.request.dto";
import { find_one_user_response_dto } from "../dto/find-one.user.response.dto";
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

    @Column()
    createdAt: Date;

    @Column()
    isActive: boolean;

    @OneToMany(() => Product, (product) => product.user)
    product: Product[];

    constructor(){
        this.isActive = true;
        this.createdAt = new Date();
    }

    setter(body: create_user_request_dto){
        this.id = body.id;
        this.pw = body.pw;
        this.name = body.name;
        this.age = body.age;
        this.isSeller = body.isSeller
    }

    toFindOneResponse(): find_one_user_response_dto {
        return {
            id: this.id,
            name: this.name,
            isSeller: this.isSeller,
            createdAt: this.createdAt,
            isActive: this.isActive,
            products: this.product?.map((p) => ({
                number: p.number,
                name: p.name,
                des: p.des,
                price: p.price,
                stock: p.stock,
            })) ?? [],
        };
    }
}
