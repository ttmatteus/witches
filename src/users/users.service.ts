import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './dto/entities/user.entity';
import { Repository } from 'typeorm';
import * as crypto from 'crypto';
import { CreateUserDto } from './dto/create-user.dto';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  generateToken(): string {
    return crypto.randomBytes(20).toString('hex');
  }

  // Novo user
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const token = this.generateToken();

    // Garantir que o nível de progresso seja 1 para novos usuários
    const newUser = this.usersRepository.create({
      token,
      progress: { level: 1 }, 
    });

    return this.usersRepository.save(newUser);
  }

  // Backup do progresso
  async getProgress(token: string): Promise<any> {
    const user = await this.usersRepository.findOne({ where: { token } });
    if (!user) {
      throw new Error('User not found');
    }
    return user.progress;
  }

  // Atualizar progresso
  async updateProgress(token: string, progress: any): Promise<void> {
    const user = await this.usersRepository.findOne({ where: { token } });
    if (!user) {
      throw new Error('User not found');
    }
    user.progress = progress;
    await this.usersRepository.save(user);
  }
}
