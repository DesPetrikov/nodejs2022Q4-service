import { User } from './users.interface';

export const excludePassFromUserResponse = (user: User) => {
  const response = {};
  for (const key in user) {
    key !== 'password' && (response[key] = user[key]);
  }
  return response as User;
};
