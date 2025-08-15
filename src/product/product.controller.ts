import { Controller, Get, Post, Body, Patch, Param, Delete, Headers } from '@nestjs/common';
import { ProductService } from './product.service';
import { create_product_request_dto } from './dto/create.product.request.dto';
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // 상품 생성
  @Post()
  create(@Body() body: create_product_request_dto, @Headers() id: string) {
    return this.productService.create(body, id);
  }

  // 상품 조회 (전체)
  @Get('all')
  findAll() {
    return this.productService.findAll();
  }

  // 상품 상세 조회 (상품 number)
  @Get('number')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  // 상품 삭제
  @Delete(':id')
  async remove(@Body() body: delete_user_request_dto) {
      return this.productService.remove(body);
    }
}
