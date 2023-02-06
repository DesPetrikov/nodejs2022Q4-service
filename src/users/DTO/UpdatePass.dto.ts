import { IsNotEmpty, IsString } from 'class-validator';

export class UpdatePassDTO {
  @IsString()
  @IsNotEmpty()
  oldPassword: string;

  @IsString()
  @IsNotEmpty()
  newPassword: string;
}
