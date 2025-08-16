import { IsString } from "class-validator";

export class find_one_user_request_dto {
    @IsString()
    id: string;
}