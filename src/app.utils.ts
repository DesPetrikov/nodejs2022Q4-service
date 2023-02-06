import { HttpException, HttpStatus } from '@nestjs/common';
import { validate } from 'uuid';

export const checkIsIdValid = (id: string) => {
  if (!validate(id)) {
    throw new HttpException('Invalid ID', HttpStatus.BAD_REQUEST);
  }
  return true;
};
