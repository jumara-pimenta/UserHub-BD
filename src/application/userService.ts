import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import IUserRepository from 'src/infrastructure/userRepository.contract';
import { UserCreateDTO, UserUpdateDTO } from './user.dto';
import { UserData } from 'src/domain/userData';


@Injectable()
export class UserService {
  constructor(
    @Inject("IUserRepository")
    private readonly userRepository: IUserRepository
  ) {}

  async createUser(user: UserCreateDTO): Promise<any> {
    const userExists = await this.userRepository.findByCpf(user.cpf);

    if (userExists)
    throw new HttpException("Já existe cadastro com este CPF", HttpStatus.UNAUTHORIZED);

    const userCreate = await this.userRepository.createUser(new UserData(user));
    const { ...result } = userCreate;

    return result;
  }

  async listUsers(): Promise<UserData[]> {
    return this.userRepository.listUsers();
  }

  async findById(id: string): Promise<UserData> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new HttpException(
        "Usuário(a) não encontrado(a)",
        HttpStatus.NOT_FOUND
      );
    }

    return user;
  }

  async editUser(userId: string, user: UserUpdateDTO): Promise<UserData> {
    const userEdited = await this.userRepository.findById(userId);

    if (!userEdited) {
      throw new HttpException(
        "Usuário(a) não encontrado(a)",
        HttpStatus.NOT_FOUND
      );
    }
    
    return await this.userRepository.editUser(userId, user);
  }

  async delete(id: string): Promise<UserData> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new HttpException("Usuário(a) não encontrado(a)", HttpStatus.NOT_FOUND);
    }

    return await this.userRepository.delete(id);
  }
}