import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { create_user_request_dto } from './dto/create.user.request.dto';
import { findone_user_request_dto } from './dto/findone.user.request.dto';
import { findAll_user_response_dto } from './dto/findAll.user.response.dto';
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
  async findAll(): Promise<findAll_user_response_dto[]> {
    return this.userService.findAll();
  }

  // 유저 상세 조회 (유저 id)
  @Get('findbyID')
  async findOne(@Body() body: findone_user_request_dto ) {
    return this.userService.findOne(body);
  }

  // 유저 삭제
  @Delete()
  async remove(@Body() body: delete_user_request_dto) {
    return this.userService.remove(body);
  }
}
