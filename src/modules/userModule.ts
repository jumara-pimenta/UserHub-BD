import { Module } from '@nestjs/common';
import { UserController } from '../presentation/userController';
import { UserService } from '../application/userService';
import { UserRepository } from '../infrastructure/userRepository';

@Module({
  controllers: [UserController],
  providers: [UserService,
    {
      provide: "IUserRepository",
      useClass: UserRepository,
    },],
  exports: [UserService],
})
export class UserModule {}