import { IsNumber } from "class-validator";

export class find_one_product_request_dto {
    @IsNumber()
    number: number;
}