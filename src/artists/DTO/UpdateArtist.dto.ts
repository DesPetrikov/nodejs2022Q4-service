import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class UpdateArtistDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsBoolean()
  @IsNotEmpty()
  grammy: boolean;
}
