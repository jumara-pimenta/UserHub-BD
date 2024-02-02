import { v4 as uuid } from "uuid";

export class UserData {
  id: string;
  name: string;
  email: string;
  password: string;
  birthdate: Date;
  gender: string;
  cpf: string;
  locationIdentification: string;
  cep: string;
  logradouro: string;
  numero: string;
  bairro: string;
  complemento: string;
  localidade: string;
  uf: string;
  cellphone: string;
  landline: string;
  createdAt: Date;
  updatedAt?: Date;

  constructor(props: Omit<UserData, "id" | "createdAt">, id?: string) {
    Object.assign(this, props);
    this.id = id ?? uuid();
  }
}
