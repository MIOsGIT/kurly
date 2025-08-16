import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { create_user_request_dto } from './dto/create.user.request.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { find_one_user_request_dto } from './dto/find-one.user.request.dto';
import { delete_user_request_dto } from './dto/delete.user.request.dto';
import { find_all_user_response_dto } from './dto/find-all.user.response.dto';
import { find_one_user_response_dto } from './dto/find-one.user.response.dto';
import { JwtService } from '@nestjs/jwt';
import { login_user_request_dto } from './dto/login.user.request.dto';
import { Payload } from 'src/security/payload';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private jwtservice: JwtService,
  ){}

  // 유저 생성
  async create(body: create_user_request_dto): Promise<void> {
    const exist = await this.userRepository.findOne({ 
      where: { id : body.id } });
    if(exist) throw new BadRequestException('이미 존재하는 ID 입니다.')
    const user = this.userRepository.create(body);
    await this.userRepository.save(user);
    
  }

  // 유저 조회 (전체)
  async findAll(): Promise<find_all_user_response_dto[]> {
    const users = await this.userRepository.find();
    return users.map(user => {
      const find_all_user_response = user.toFindOneResponse();
      return find_all_user_response;
    });
  }

  // 유저 상세 조회 (유저 id)
  async findOne(body: find_one_user_request_dto) {
    const user = await this.userRepository.findOne({
      where: { id: body.id },
      relations: ['product'],
    });
    if (!user) {
      throw new NotFoundException('해당 유저를 찾을 수 없습니다.');
    }
    return user.toFindOneResponse();
  }

  // 유저 삭제
  async remove(body: delete_user_request_dto): Promise<void> {
    const user = await this.userRepository.findOne({ 
      where: { id: body.id } 
    });
    if (!user) {
      throw new NotFoundException(`ID가 ${body.id}인 유저를 찾을 수 없습니다.`);
    }
    await this.userRepository.delete(body);
  }

  //유저 로그인
  async login(body: login_user_request_dto) {
    const user = await this.userRepository
    .createQueryBuilder('u')
    .where('u.id = :id', { id: body.id })
    .andWhere('u.pw = :pw', { pw: body.pw })
    .getOne();

    if (!user) throw new NotFoundException('회원 정보가 일치하지 않습니다!'); 
    const payload = new Payload(user.id);
    return this.jwtservice.sign(payload.Plain(), {
        secret: 'SECRET',
        expiresIn: '1h'
    });
  }
}
