import { IsNumber } from "class-validator";

export class delete_product_request_dto {
    @IsNumber()
    number: number;
}