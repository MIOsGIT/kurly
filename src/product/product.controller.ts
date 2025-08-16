import { Controller, Get, Post, Body, Patch, Param, Delete, Headers, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { create_product_request_dto } from './dto/create.product.request.dto';
import { delete_product_request_dto } from './dto/delete.product.request.dto';
import { find_one_product_request_dto } from './dto/find-one.product.request.dto';
import { AuthGuard } from 'src/security/auth.guard';
import { ApiBearerAuth, ApiOperation, ApiOkResponse, ApiCreatedResponse, ApiUnauthorizedResponse, ApiNotFoundResponse, ApiResponse } from '@nestjs/swagger';
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // 상품 생성
  @Post()
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    summary: '상품 등록',
    description: '새로운 상품을 등록합니다. 인증된 사용자만 등록할 수 있습니다.'
  })
  @ApiCreatedResponse({ description: '상품 등록 성공' })
  @ApiUnauthorizedResponse({ description: '인증되지 않은 사용자입니다.' })
  @ApiResponse({ status: 409, description: '이미 존재하는 상품입니다.' })
  create(@Body() body: create_product_request_dto, @Headers('id') id: string) {
    return this.productService.create(body, id);
  }

  // 상품 조회 (전체)
  @Get('all')
  @ApiOperation({
    summary: '전체 상품 조회',
    description: '등록된 모든 상품의 목록을 조회합니다.'
  })
  @ApiOkResponse({ description: '전체 상품 목록 조회 성공' })
  findAll() {
    return this.productService.findAll();
  }

  // 상품 상세 조회 (상품 number)
  @Get('number')
  @ApiOperation({
    summary: '특정 상품 상세 조회',
    description: '상품 번호를 사용하여 특정 상품의 정보를 조회합니다.'
  })
  @ApiOkResponse({ description: '상품 상세 조회 성공' })
  @ApiNotFoundResponse({ description: '해당 번호의 상품을 찾을 수 없습니다.' })
  findOne(@Body() body: find_one_product_request_dto) {
    return this.productService.findOne(body);
  }

  // 상품 삭제
  @Delete()
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    summary: '상품 삭제',
    description: '특정 상품을 삭제합니다. 상품 등록자 또는 관리자가 삭제할 수 있습니다.'
  })
  @ApiOkResponse({ description: '상품 삭제 성공' })
  @ApiUnauthorizedResponse({ description: '인증되지 않은 사용자입니다.' })
  @ApiNotFoundResponse({ description: '삭제할 상품을 찾을 수 없습니다.' })
  async remove(@Body() body: delete_product_request_dto, @Headers('id') id: string) {
    return this.productService.remove(body, id);
  }
}
