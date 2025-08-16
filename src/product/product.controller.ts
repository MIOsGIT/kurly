import { Controller, Get, Post, Body, Patch, Param, Delete, Headers, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { create_product_request_dto } from './dto/create.product.request.dto';
import { delete_product_request_dto } from './dto/delete.product.request.dto';
import { find_one_product_request_dto } from './dto/find-one.product.request.dto';
import { AuthGuard } from 'src/security/auth.guard';
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // 상품 생성
  @Post()
  @UseGuards(AuthGuard)
  create(@Body() body: create_product_request_dto, @Headers('id') id: string) {
    return this.productService.create(body, id);
  }

  // 상품 조회 (전체)
  @Get('all')
  findAll() {
    return this.productService.findAll();
  }

  // 상품 상세 조회 (상품 number)
  @Get('number')
  findOne(@Body() body: find_one_product_request_dto) {
    return this.productService.findOne(body);
  }

  // 상품 삭제
  @Delete()
  @UseGuards(AuthGuard)
  async remove(@Body() body: delete_product_request_dto, @Headers('id') id: string) {
    return this.productService.remove(body, id);
  }
}
