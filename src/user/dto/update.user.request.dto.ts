import { PartialType } from '@nestjs/mapped-types';
import { create_user_request_dto } from './create.user.request.dto';

export class UpdateUserDto extends PartialType(create_user_request_dto) {}
