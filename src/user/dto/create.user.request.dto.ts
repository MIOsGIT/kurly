import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNumber, IsString } from "class-validator";

export class create_user_request_dto {
    @ApiProperty({
        description: '회원 ID',
        example: 'jazzb04',
    })
    @IsString()
    id: string;

    @ApiProperty({
        description: '회원 PW',
        example: 'alwnalwn',
    })
    @IsString()
    pw: string;

    @ApiProperty({
        description: '회원 성명',
        example: '김미주',
    })
    @IsString()
    name: string;

    @ApiProperty({
        description: '회원 나이',
        example: 'jazzb04',
    })
    @IsNumber()
    age: number;

    @ApiProperty({
        description: '판매자 회원 여부',
        example: 'true',
    })
    @IsBoolean()
    isSeller: boolean;
}
