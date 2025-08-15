import { User } from "src/user/entities/user.entity";

export class find_all_product_response_dto {
    number: number;
    name: string;
    des: string;
    stock: number;
    price: number;
    isActive: boolean;
    user: User;
}