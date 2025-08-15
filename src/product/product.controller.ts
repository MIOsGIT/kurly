import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { create_product_request_dto } from './dto/create.product.request.dto';
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // 상품 생성
  @Post()
  create(@Body() body: create_product_request_dto) {
    return this.productService.create(body);
  }

  // 상품 조회 (전체)
  @Get()
  findAll() {
    return this.productService.findAll();
  }

  // 상품 상세 조회 (상품 number)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  // 상품 삭제
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
