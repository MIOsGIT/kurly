import { IsNumber, IsString } from "class-validator";

export class create_product_request_dto {
    @IsString()
    name: string;

    @IsString()
    des: string;

    @IsNumber()
    stock: number;

    @IsNumber()
    price: number;
}