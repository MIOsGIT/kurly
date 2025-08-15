import { Injectable } from '@nestjs/common';
import { create_product_request_dto } from './dto/create.product.request.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>
  ){}
  
  // 상품 생성
  async create(body: create_product_request_dto) {
    return 'This action adds a new product';
  }

  // 상품 조회 (전체)
  async findAll() {
    return `This action returns all product`;
  }

  // 상품 상세 조회 (유저 id)
  async findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  // 상품 삭제
  async remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
