import { Controller, Get, Param } from '@nestjs/common';
import { checkIsIdValid } from 'src/app.utils';
import { DBService } from 'src/db/db.service';
import { Artist } from './artists.interface';
import { ArtistsService } from './artists.service';

@Controller('artist')
export class ArtistsController {
  constructor(private artistsService: ArtistsService) {}
  //   @Get()
  //   async getAll(): Promise<Artist[]> {
  //     return await this.artistsService.getAllArtists();
  //   }

  //   @Get(':id')
  //   async getOne(@Param('id') id: string): Promise<Artist> {
  //     if (checkIsIdValid(id)) {
  //       return await this.artistsService.getOneArtist(id);
  //     }
  //   }
}
