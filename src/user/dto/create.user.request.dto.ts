import { IsBoolean, IsNumber, IsString } from "class-validator";

export class create_user_request_dto {
    @IsString()
    id: string;

    @IsString()
    pw: string;

    @IsString()
    name: string;

    @IsNumber()
    age: number;

    @IsBoolean()
    isSeller: boolean;
}
