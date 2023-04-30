import { User } from './user.entity';

export class UserHelper implements Omit<User, 'password'> {
  id: number;
  username: string;
}
