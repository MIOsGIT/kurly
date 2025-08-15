import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.request.dto';
import { UpdateUserDto } from './dto/update.user.request.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ){}

  async sign_up(createUserDto: CreateUserDto): Promise<void> {
    const exist = await this.userRepository.findOne({ 
      where: { id : createUserDto.id } });
    if(exist) throw new BadRequestException('이미 존재하는 ID 입니다.')
    const user = this.userRepository.create(createUserDto);
    await this.userRepository.save(user);
  }

  async findAll() {
    return `This action returns all user`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
