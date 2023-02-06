import { Module } from '@nestjs/common';
import { DBService } from 'src/db/db.service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, DBService],
})
export class UsersModule {}
