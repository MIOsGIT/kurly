import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Headers } from '@nestjs/common';
import { UserService } from './user.service';
import { create_user_request_dto } from './dto/create.user.request.dto';
import { find_one_user_request_dto } from './dto/find-one.user.request.dto';
import { find_all_user_response_dto } from './dto/find-all.user.response.dto';
import { delete_user_request_dto } from './dto/delete.user.request.dto';
import { login_user_request_dto } from './dto/login.user.request.dto';
import { AuthGuard } from 'src/security/auth.guard';
import { ApiBearerAuth, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';

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
  @ApiOperation({
    summary: '전체 유저 조회',
    description: '모든 유저의 목록을 조회합니다.'
  })
  @ApiOkResponse({
    description: '전체 유저 목록 조회 성공'
  })
  async findAll() {
    return this.userService.findAll();
  }

  // 유저 상세 조회 (유저 id)
  @Get('id')
  @ApiOperation({
    summary: '특정 유저 상세 조회',
    description: 'ID를 사용하여 특정 유저의 정보를 조회합니다.'
  })
  @ApiOkResponse({ description: '유저 상세 정보 조회 성공' })
  @ApiNotFoundResponse({ description: '해당 ID의 유저를 찾을 수 없습니다.' })
  async findOne(@Body() body: find_one_user_request_dto ) {
    return this.userService.findOne(body);
  }

  // 유저 삭제
  @Delete()
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    summary: '회원탈퇴',
    description: '특정 유저를 삭제합니다. 본인 또는 관리자만 삭제할 수 있습니다.'
  })
  @ApiOkResponse({ description: '유저 정보 삭제 성공' })
  @ApiUnauthorizedResponse({ description: '인증되지 않은 사용자입니다.' })
  @ApiNotFoundResponse({ description: '삭제할 유저를 찾을 수 없습니다.' })
  async remove(@Body() body: delete_user_request_dto, @Headers('id') id: string) {
    return this.userService.remove(body, id);
  }

  // 유저 로그인
  @Get('login')
  @ApiOperation({
    summary: '로그인',
    description: 'ID와 비밀번호로 로그인을 수행하고 JWT 토큰을 발급합니다.'
  })
  @ApiOkResponse({ description: '로그인 성공 및 토큰 발급', schema: { example: { accessToken: 'jwt.token.string' } } })
  @ApiUnauthorizedResponse({ description: '회원 정보가 일치하지 않습니다.' })
  async login(@Body() body: login_user_request_dto): Promise<any> {
      const result = await this.userService.login(body);
      return result;
    }
}
