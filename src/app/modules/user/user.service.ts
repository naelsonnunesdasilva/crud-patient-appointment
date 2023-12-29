import { Injectable } from '@nestjs/common';
export type User = any;

@Injectable()
export class UserService {
  private readonly users = [
    {
      userId: 1,
      username: 'naelson',
      password: 'q1w2e3r4',
    },
    {
      userId: 2,
      username: 'lorem',
      password: 'r4e3w2q1',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}