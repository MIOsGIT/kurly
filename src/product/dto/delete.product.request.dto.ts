import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class delete_product_request_dto {
    @ApiProperty({
        description: '상품 Number',
        example: '1',
    })
    @IsNumber()
    number: number;
}