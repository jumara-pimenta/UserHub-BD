import { Controller, Get, Post, Body, Param, Patch, HttpStatus, HttpException, UsePipes, ValidationPipe, Delete } from '@nestjs/common';
import fetch from 'node-fetch';
import { UserService } from '../application/userService';
import { UserCreateDTO, UserUpdateDTO } from 'src/application/user.dto';
import { UserData } from 'src/domain/userData';
import { cpf } from 'cpf-cnpj-validator';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/register')
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  async registerUser(@Body() userData: UserCreateDTO): Promise<any> {
    try{

      const data: { [key: string]: any } = userData;

      if (data.cep) {
        const response = await fetch(`https://viacep.com.br/ws/${data.cep}/json/`);
        const cepData: { [key: string]: any } = await response.json(); 

        if ('erro' in cepData) {
          throw new HttpException('CEP inválido ou não encontrado', HttpStatus.BAD_REQUEST);
        }
  
        if (!cepData.logradouro || !cepData.bairro || !cepData.localidade || !cepData.uf) {
          throw new HttpException('Informações do CEP incompletas', HttpStatus.BAD_REQUEST);
        }

        if (cepData.uf !== 'AM') {
          throw new HttpException('Cadastro permitido apenas para o estado do Amazonas', HttpStatus.BAD_REQUEST);
        }

      }

      if (data.birthdate) {
        const birthdate: Date = new Date(data.birthdate);
        const age = Math.floor((new Date().getTime() - birthdate.getTime()) / 31557600000); 
        if (age < 18) {
          throw new HttpException('Usuários com menos de 18 anos não podem se cadastrar', HttpStatus.BAD_REQUEST);
        }
      }

      if (data.cpf && !cpf.isValid(data.cpf)) {
        throw new HttpException('CPF inválido', HttpStatus.BAD_REQUEST);
      }

       await this.userService.createUser(userData);   
       return { message: 'Cadastro realizado com sucesso' };
    } catch (error) {
      if (error instanceof HttpException && error.getStatus() === HttpStatus.BAD_REQUEST) {
        throw new HttpException({ error: 'Erro de validação', messages: error.getResponse() }, HttpStatus.BAD_REQUEST);
      } else {
        console.error(error);
        throw new HttpException({error: 'Erro ao cadastrar usuário', messages: error.getResponse()}, HttpStatus.INTERNAL_SERVER_ERROR);
      }}    
  }

  @Get('/list')
  async listUsers(): Promise<UserData[]> {
    return this.userService.listUsers();
  }

  @Get('/:id')
  async findById(@Param("id") id: string): Promise<UserData> {
    return await this.userService.findById(id);
  }

  @Patch('/edit/:id')
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  async editUser(@Param('id') id: string, @Body() userData: UserUpdateDTO): Promise<any> {
    try {

      const data: { [key: string]: any } = userData;

      if (data.cep) {
        const response = await fetch(`https://viacep.com.br/ws/${data.cep}/json/`);
        const cepData: { [key: string]: any } = await response.json(); 

        if ('erro' in cepData) {
          throw new HttpException('CEP inválido ou não encontrado', HttpStatus.BAD_REQUEST);
        }
  
        if (!cepData.logradouro || !cepData.bairro || !cepData.localidade || !cepData.uf) {
          throw new HttpException('Informações do CEP incompletas', HttpStatus.BAD_REQUEST);
        }

        if (cepData.uf !== 'AM') {
          throw new HttpException('Cadastro permitido apenas para o estado do Amazonas', HttpStatus.BAD_REQUEST);
        }

      }
      
      await this.userService.editUser(id, userData);
      return { message: 'Edição realizada com sucesso' };
    }  catch (error) {
      if (error instanceof HttpException && error.getStatus() === HttpStatus.BAD_REQUEST) {
        throw new HttpException({ error: 'Erro de validação', messages: error.getResponse() }, HttpStatus.BAD_REQUEST);
      } else {
        console.error(error);
        throw new HttpException({error: 'Erro ao editar', messages: error.getResponse()}, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }
  
  @Delete("/delete/:id")
  async delete(@Param("id") id: string): Promise<any> {
    
    await this.userService.delete(id);

    return { message: "Usuário deletado com sucesso" };
  }
}