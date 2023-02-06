import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { DBService } from 'src/db/db.service';
import { CreateUserDTO } from './DTO/CreateUser.dto';
import { User } from './users.interface';
import { excludePassFromUserResponse } from './users.utils';
import { UpdatePassDTO } from './DTO/UpdatePass.dto';

@Injectable()
export class UsersService {
  constructor(protected DBService: DBService) {}

  async createUser({ login, password }: CreateUserDTO): Promise<User> {
    const user: User = {
      id: uuidv4(),
      login,
      password,
      version: 1,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    await this.DBService.create('users', user);
    return excludePassFromUserResponse(user);
  }

  async getAllUsers() {
    return await this.DBService.findMany('users');
  }
  async getOneUser(id: string) {
    return await this.DBService.findOne('users', id);
  }

  async updateUser(id: string, { oldPassword, newPassword }: UpdatePassDTO) {
    const user = await this.DBService.findOne('users', id);

    if (!oldPassword || !newPassword) {
      throw new HttpException(
        'Please, enter old password and new password',
        HttpStatus.BAD_REQUEST,
      );
    } else if (oldPassword !== user.password) {
      throw new HttpException(
        'You entered an incorrect password',
        HttpStatus.FORBIDDEN,
      );
    }

    user.password = newPassword;
    user.version += 1;
    user.updatedAt = Date.now();

    const userFromDB = await this.DBService.update('users', user.id, user);
    return excludePassFromUserResponse(userFromDB);
  }

  async deleteUser(id: string): Promise<void> {
    await this.DBService.delete('users', id);
  }
}
