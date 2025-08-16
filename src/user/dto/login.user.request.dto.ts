import { IsString } from "class-validator";

export class login_user_request_dto {
    @IsString()
    id: string;

    @IsString()
    pw: string;
}