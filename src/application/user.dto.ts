import { IsDateString, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString } from "@nestjs/class-validator";
import { Gender, State } from "src/utils/ETypes";

export class UserCreateDTO {
    id: string;

    @IsString({ message: "O nome deve ser do tipo texto" })
    @IsNotEmpty({ message: "O nome é obrigatório" })
    name: string;
  
    @IsEmail({}, { message: "O formato do e-mail é inválido" })
    @IsNotEmpty({ message: "O e-mail é obrigatório" })
    email: string;
  
    @IsString({ message: "A senha deve ser do tipo texto" })
    @IsNotEmpty({ message: "A senha é obrigatória" })
    password: string;
  
    @IsDateString({ message: "A data de nascimento deve estar em um formato de data válido" })
    @IsNotEmpty({ message: "A data de nascimento é obrigatória" })
    birthdate: Date;
  
    @IsEnum(Gender, { message: "O gênero deve ser Masculino, Feminino ou Outros" })
    @IsNotEmpty({ message: "O gênero é obrigatório" })
    gender: Gender;
  
    @IsString({ message: "O CPF deve ser do tipo texto" })
    @IsNotEmpty({ message: "O CPF é obrigatório" })
    cpf: string;
  
    @IsString({ message: "A identificação de localização deve ser do tipo texto" })
    @IsNotEmpty({ message: "A identificação de localização é obrigatória" })
    locationIdentification: string;
  
    @IsString({ message: "O CEP deve ser do tipo texto" })
    @IsNotEmpty({ message: "O CEP é obrigatório" })
    cep: string;
  
    @IsString({ message: "O logradouro deve ser do tipo texto" })
    @IsNotEmpty({ message: "O logradouro é obrigatório" })
    logradouro: string;
  
    @IsString({ message: "O número deve ser do tipo texto" })
    @IsNotEmpty({ message: "O número é obrigatório" })
    numero: string;
  
    @IsString({ message: "O bairro deve ser do tipo texto" })
    @IsNotEmpty({ message: "O bairro é obrigatório" })
    bairro: string;
  
    @IsString({ message: "O complemento deve ser do tipo texto" })
    @IsOptional()
    complemento: string;
  
    @IsString({ message: "A localidade deve ser do tipo texto" })
    @IsNotEmpty({ message: "A localidade é obrigatória" })
    localidade: string;
  
    @IsEnum(State, { message: "O estado deve ser um dos estados brasileiros" })
    @IsNotEmpty({ message: "O estado é obrigatório" })
    uf: State;
  
    @IsString({ message: "O celular deve ser do tipo texto" })
    @IsNotEmpty({ message: "O celular é obrigatório" })
    cellphone: string;
  
    @IsString({ message: "O telefone fixo deve ser do tipo texto" })
    @IsOptional()
    landline: string;
  }

  export class UserUpdateDTO {
    id?: string;

    @IsString({ message: "O nome deve ser do tipo texto" })
    @IsNotEmpty({ message: "O nome é obrigatório" })
    name?: string;
  
    @IsEmail({}, { message: "O formato do e-mail é inválido" })
    @IsNotEmpty({ message: "O e-mail é obrigatório" })
    email?: string;
  
    @IsString({ message: "A senha deve ser do tipo texto" })
    @IsNotEmpty({ message: "A senha é obrigatória" })
    password?: string;
  
    @IsDateString({ message: "A data de nascimento deve estar em um formato de data válido" })
    @IsNotEmpty({ message: "A data de nascimento é obrigatória" })
    birthdate?: Date;
  
    @IsEnum(Gender, { message: "O gênero deve ser masculino, feminino ou outro" })
    @IsNotEmpty({ message: "O gênero é obrigatório" })
    gender?: Gender;
  
    @IsString({ message: "O CPF deve ser do tipo texto" })
    @IsNotEmpty({ message: "O CPF é obrigatório" })
    cpf?: string;
  
    @IsString({ message: "A identificação de localização deve ser do tipo texto" })
    @IsNotEmpty({ message: "A identificação de localização é obrigatória" })
    locationIdentification?: string;
  
    @IsString({ message: "O CEP deve ser do tipo texto" })
    @IsNotEmpty({ message: "O CEP é obrigatório" })
    cep?: string;
  
    @IsString({ message: "O logradouro deve ser do tipo texto" })
    @IsNotEmpty({ message: "O logradouro é obrigatório" })
    logradouro?: string;
  
    @IsString({ message: "O número deve ser do tipo texto" })
    @IsNotEmpty({ message: "O número é obrigatório" })
    numero?: string;
  
    @IsString({ message: "O bairro deve ser do tipo texto" })
    @IsNotEmpty({ message: "O bairro é obrigatório" })
    bairro?: string;
  
    @IsString({ message: "O complemento deve ser do tipo texto" })
    @IsOptional()
    complemento?: string;
  
    @IsString({ message: "A localidade deve ser do tipo texto" })
    @IsNotEmpty({ message: "A localidade é obrigatória" })
    localidade?: string;
  
    @IsEnum(State, { message: "O estado deve ser um dos estados brasileiros" })
    @IsNotEmpty({ message: "O estado é obrigatório" })
    uf?: State;
  
    @IsString({ message: "O celular deve ser do tipo texto" })
    @IsNotEmpty({ message: "O celular é obrigatório" })
    cellphone?: string;
  
    @IsString({ message: "O telefone fixo deve ser do tipo texto" })
    @IsOptional()
    landline?: string;
  }