import { UserUpdateDTO } from "src/application/user.dto";
import { UserData } from "src/domain/userData";

export default interface IUserRepository {
    createUser(user: UserData): Promise<UserData>
    listUsers();
    editUser(userId: string, user: UserUpdateDTO);
    findById(id: string): Promise<UserData>
    findByCpf(cpf: string): Promise<UserData>;
    delete(id: string): Promise<UserData>;
}