import { IsString } from "class-validator";

export class delete_user_request_dto {
    @IsString()
    id: string;

    @IsString()
    pw: string;
}