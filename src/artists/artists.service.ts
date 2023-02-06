import { Injectable } from '@nestjs/common';
import { DBService } from 'src/db/db.service';

@Injectable()
export class ArtistsService {
  constructor(protected DBService: DBService) {}
  async getAllArtists() {
    return await this.DBService.findMany('users');
  }
  async getOneUser(id: string) {
    return await this.DBService.findOne('users', id);
  }
}
