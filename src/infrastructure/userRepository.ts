import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infrastructure/database/prisma.service';
import IUserRepository from './userRepository.contract';
import { UserData } from 'src/domain/userData';
import { UserUpdateDTO } from 'src/application/user.dto';

@Injectable()
export class UserRepository implements IUserRepository {
constructor(private readonly repository: PrismaService) {} 

  async createUser(user: UserData): Promise<UserData> {
    return await this.repository.user.create({
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
        birthdate: user.birthdate,
        gender: user.gender,
        cpf: user.cpf,
        locationIdentification: user.locationIdentification,
        cep: user.cep,
        logradouro: user.logradouro,
        numero: user.numero,
        bairro: user.bairro,
        complemento: user.complemento,
        localidade: user.localidade,
        uf: user.uf,
        cellphone: user.cellphone,
        landline: user.landline,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    });
  }

  async listUsers() {
    return await  this.repository.user.findMany();
  }

  async editUser(userId: string, user: UserUpdateDTO): Promise<UserData> {
    return await this.repository.user.update({
      where: { id: userId },
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
        birthdate: user.birthdate,
        gender: user.gender,
        cpf: user.cpf,
        locationIdentification: user.locationIdentification,
        cep: user.cep,
        logradouro: user.logradouro,
        numero: user.numero,
        bairro: user.bairro,
        complemento: user.complemento,
        localidade: user.localidade,
        uf: user.uf,
        cellphone: user.cellphone,
        landline: user.landline,
      },
    });
  }

  async findById(id: string): Promise<UserData> {
    return await this.repository.user.findUnique({
      where: {
        id: id,
      },
    });
  }

  async findByCpf(cpf: string): Promise<UserData> {
    return await this.repository.user.findUnique({
      where: {
        cpf: cpf,
      },
    });
  }

  async delete(id: string): Promise<UserData> {
    return await this.repository.user.delete({
      where: {
        id,
      }
    })
  }
}
