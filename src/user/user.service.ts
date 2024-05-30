import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  async create(user: User) {
    const { username, email, password } = user;
    const userExist = await this.userRepository.findOne({ where: { email } });
    if (userExist) {
      throw new BadRequestException('User with this email already exists');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = this.userRepository.create({
      username, email, password: hashedPassword,
    })
    try {
      return await this.userRepository.save(newUser);
    } catch (error) {
      throw new BadRequestException('Error creating user');
    }
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  async update(id: number, user: Partial<User>): Promise<void> {
    await this.userRepository.update(id, user);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
