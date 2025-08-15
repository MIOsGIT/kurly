import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { create_user_request_dto } from './dto/create.user.request.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { findone_user_request_dto } from './dto/findone.user.request.dto';
import { delete_user_request_dto } from './dto/delete.user.request.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ){}

  // 유저 생성
  async sign_up(body: create_user_request_dto): Promise<void> {
    const exist = await this.userRepository.findOne({ 
      where: { id : body.id } });
    if(exist) throw new BadRequestException('이미 존재하는 ID 입니다.')
    const user = this.userRepository.create(body);
    await this.userRepository.save(user);
  }

  // 유저 조회 (전체)
  async findAll() {
    return this.userRepository.find();
  }

  // 유저 상세 조회 (유저 id)
  async findOne(body: findone_user_request_dto) {
    const user = await this.userRepository.findOne({ 
      where: { id: body.id } 
    });
    if (!user) {
      throw new NotFoundException(`ID가 ${body.id}인 유저를 찾을 수 없습니다.`);
    }
    return user;
  }

  // 유저 삭제
  async remove(body: delete_user_request_dto): Promise<void> {
    const user = await this.userRepository.findOne({ 
      where: { id: body.id } 
    });
    if (!user) {
      throw new NotFoundException(`ID가 ${body}인 유저를 찾을 수 없습니다.`);
    }
    await this.userRepository.delete(body);
  }
}
