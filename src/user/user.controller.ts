import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { create_user_request_dto } from './dto/create.user.request.dto';
import { UpdateUserDto } from './dto/update.user.request.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // 유저 생성
  @Post()
  sign_up(@Body() body: create_user_request_dto) {
    return this.userService.sign_up(body);
  }

  // 유저 조회 (전체)
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  // 유저 상세 조회 (유저 id)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  // 유저 삭제
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
