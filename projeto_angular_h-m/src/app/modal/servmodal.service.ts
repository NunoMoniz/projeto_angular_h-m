import { Injectable } from '@angular/core';
import { User } from '../shared/user.type';
import { users } from '../shared/users';

@Injectable({
  providedIn: 'root'
})
export class ServmodalService {

  constructor() { }
  private dbUsers: User[] = users;

  checkLogin(email: string, password: string): boolean {
    return this.dbUsers.some(user => user.email === email && user.password === password);
  }

}
