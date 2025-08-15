import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create.product.request.dto';
import { UpdateProductDto } from './dto/update.product.request.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // 상품 생성
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
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

  // 상품 수정
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  // 상품 삭제
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
