import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';

export type User = any;

@Injectable()
export class UserService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: '12345'
    },
    {
      userId: 2,
      username: 'maria',
      password: '12345'
    }
  ];

  findOne(username: string): Observable<User | undefined> {
    return of(this.users.find((u) => u.username === username));
  }
}
