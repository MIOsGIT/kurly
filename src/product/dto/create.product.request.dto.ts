import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class create_product_request_dto {
    @ApiProperty({
        description: '상품 이름',
        example: '알감자',
    })
    @IsString()
    name: string;

    @ApiProperty({
        description: '상품 설명',
        example: '포슬포슬 맛있는 강원도산 알감자 입니다.',
    })
    @IsString()
    des: string;

    @ApiProperty({
        description: '상품 재고',
        example: '50',
    })
    @IsNumber()
    stock: number;

    @ApiProperty({
        description: '상품 가격',
        example: '5800',
    })
    @IsNumber()
    price: number;
}