import { Artist } from 'src/artists/artists.interface';
import { User } from 'src/users/users.interface';

export interface DBInterface {
  users: User[];
  // artists: Artist[];
}
export type DBFieldsType = keyof DBInterface;
