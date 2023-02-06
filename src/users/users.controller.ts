import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { checkIsIdValid } from 'src/app.utils';
import { CreateUserDTO } from './DTO/CreateUser.dto';
import { UpdatePassDTO } from './DTO/UpdatePass.dto';
import { User } from './users.interface';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  async getAll(): Promise<User[]> {
    return await this.userService.getAllUsers();
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<User> {
    if (checkIsIdValid(id)) {
      return await this.userService.getOneUser(id);
    }
  }

  @UsePipes(new ValidationPipe())
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() reqBody: CreateUserDTO): Promise<User> {
    return await this.userService.createUser(reqBody);
  }

  @UsePipes(new ValidationPipe())
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() reqBody: UpdatePassDTO,
  ): Promise<User> {
    if (checkIsIdValid(id)) {
      return this.userService.updateUser(id, reqBody);
    }
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string): Promise<void> {
    if (checkIsIdValid(id)) {
      await this.userService.deleteUser(id);
    }
  }
}
