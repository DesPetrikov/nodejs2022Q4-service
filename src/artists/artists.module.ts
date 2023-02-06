import { Module } from '@nestjs/common';
import { DBService } from 'src/db/db.service';
import { ArtistsController } from './artists.controller';
import { ArtistsService } from './artists.service';

@Module({
  controllers: [ArtistsController],
  providers: [ArtistsService, DBService],
})
export class ArtistsModule {}
