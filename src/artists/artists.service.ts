import { Injectable } from '@nestjs/common';
import { DBService } from 'src/db/db.service';
import { Artist } from './artists.interface';

@Injectable()
export class ArtistsService {
  constructor(protected DBService: DBService) {}
  //   async getAllArtists() {
  //     return await this.DBService.findMany('artists');
  //   }
  //   async getOneUser(id: string) {
  //     return await this.DBService.findOne('artists', id);
  //   }
}
