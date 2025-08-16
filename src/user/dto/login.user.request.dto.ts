import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class login_user_request_dto {
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
}