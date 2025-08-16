import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { create_product_request_dto } from './dto/create.product.request.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { find_all_product_response_dto } from './dto/find-all.product.response.dto';
import { User } from 'src/user/entities/user.entity';
import { delete_product_request_dto } from './dto/delete.product.request.dto';

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
  async remove(body: delete_product_request_dto, id: string): Promise<void>  {
    const user_ok : User | null = await this.userRepository.findOne({
      where: { id : id }
    });
    if (!user_ok) {
      throw new BadRequestException('회원 정보가 일치하지 않습니다.');
    }
    const product = await this.productRepository.findOne({
      where: { number: body.number },
      relations: ['user']
    });

    if (!user_ok.isSeller) {
      throw new BadRequestException('상품 삭제는 판매자 회원만 가능합니다.');
    }
    if (!product) {
      throw new NotFoundException('상품이 존재하지 않습니다.');
    }
    if (product.user.id !== user_ok?.id) {
      throw new BadRequestException('본인의 상품만 삭제할 수 있습니다.');
    }
    await this.productRepository.delete(body.number);
  }
}
