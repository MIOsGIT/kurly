import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { create_user_request_dto } from './dto/create.user.request.dto';
import { find_one_user_request_dto } from './dto/find-one.user.request.dto';
import { find_all_user_response_dto } from './dto/find-all.user.response.dto';
import { delete_user_request_dto } from './dto/delete.user.request.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // 유저 생성
  @Post()
  async sign_up(@Body() body: create_user_request_dto) {
    return this.userService.sign_up(body);
  }

  // 유저 조회 (전체)
  @Get('all')
  async findAll() {
    return this.userService.findAll();
  }

  // 유저 상세 조회 (유저 id)
  @Get('id')
  async findOne(@Body() body: find_one_user_request_dto ) {
    return this.userService.findOne(body);
  }

  // 유저 삭제
  @Delete()
  async remove(@Body() body: delete_user_request_dto) {
    return this.userService.remove(body);
  }
}
