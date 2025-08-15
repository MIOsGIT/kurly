import { BadRequestException, Injectable } from '@nestjs/common';
import { create_product_request_dto } from './dto/create.product.request.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { find_all_product_response_dto } from './dto/find-all.product.response.dto';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ){}
  
  // 상품 생성
  async create(body: create_product_request_dto, id: string): Promise<void> {
    const user_ok : User | null = await this.userRepository.findOne({
      where: { id : id }
    });
    if (user_ok) {
      if (user_ok.isSeller) {
        const productData = new Product();
        productData.setter(body);
        productData.user = user_ok;
        await this.productRepository.save(productData);
      }
      else {
        throw new BadRequestException('상품 등록은 판매자 회원만 가능합니다.');
      }
    } else {
        throw new BadRequestException('회원 정보가 일치하지 않습니다!');
    }
  }

  // 상품 조회 (전체)
  async findAll(): Promise<find_all_product_response_dto[]> {
    return this.productRepository.find();
  }

  // 상품 상세 조회 (상품 number)
  async findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  // 상품 삭제
  async remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
