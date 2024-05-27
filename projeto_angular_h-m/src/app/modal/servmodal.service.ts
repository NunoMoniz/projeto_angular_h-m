import { Injectable } from '@angular/core';
import { User } from '../shared/user.type';
import { users } from '../shared/users';

@Injectable({
  providedIn: 'root'
})
export class ServmodalService {

  constructor() { }

  private dbUsers: User[] = users;

  checkLogin(email: string, password: string) {
    const user = this.dbUsers.find(user => user.email === email && user.password === password);
    return user !== undefined;
    login = true;
  }

  login: boolean = false;

}
