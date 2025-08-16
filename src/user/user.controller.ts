import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Headers } from '@nestjs/common';
import { UserService } from './user.service';
import { create_user_request_dto } from './dto/create.user.request.dto';
import { find_one_user_request_dto } from './dto/find-one.user.request.dto';
import { find_all_user_response_dto } from './dto/find-all.user.response.dto';
import { delete_user_request_dto } from './dto/delete.user.request.dto';
import { login_user_request_dto } from './dto/login.user.request.dto';
import { AuthGuard } from 'src/security/auth.guard';
import { ApiCreatedResponse, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // 유저 생성
  @Post()
  @ApiOperation({
    summary: '회원가입',
    description: '새로운 유저를 생성합니다.'
  })
  @ApiCreatedResponse({ description: '회원가입 성공' })
  @ApiResponse({ status: 409, description: '이미 존재하는 아이디입니다.' })
  async sign_up(@Body() body: create_user_request_dto) {
    return this.userService.create(body);
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
  @UseGuards(AuthGuard)
  async remove(@Body() body: delete_user_request_dto, @Headers('id') id: string) {
    return this.userService.remove(body, id);
  }

  // 유저 로그인
  @Get('login')
  async login(@Body() body: login_user_request_dto): Promise<any> {
      const result = await this.userService.login(body);
      return result;
    }
}
